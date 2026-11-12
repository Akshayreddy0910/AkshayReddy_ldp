import re
import chromadb
from sentence_transformers import SentenceTransformer
from src.config import CHROMA_DIR, EMBEDDING_MODEL

class CompanyVectorStore:
    def __init__(self):
        self.client = chromadb.PersistentClient(path=str(CHROMA_DIR))
        self.encoder = SentenceTransformer(EMBEDDING_MODEL)

    def _collection(self, company):
        slug = re.sub(r"[^a-z0-9]+", "_", company.lower()).strip("_") or "general"
        return self.client.get_or_create_collection("company_" + slug[:50],
            metadata={"hnsw:space": "cosine"})

    def add_chunks(self, chunks):
        count = 0
        grouped = {}
        for c in chunks: grouped.setdefault(c["company"], []).append(c)
        for company, items in grouped.items():
            collection = self._collection(company)
            vectors = self.encoder.encode([x["text"] for x in items],
                normalize_embeddings=True).tolist()
            collection.upsert(ids=[x["id"] for x in items],
                documents=[x["text"] for x in items], embeddings=vectors,
                metadatas=[{"company": x["company"], "source": x.get("source","Unknown"),
                    "url": x.get("url",""), "page": str(x.get("page") or "")} for x in items])
            count += len(items)
        return count

    def search(self, company, query, top_k=8, threshold=0.30):
        col = self._collection(company)
        total = col.count()
        if total == 0: return []
        vector = self.encoder.encode([query], normalize_embeddings=True).tolist()[0]
        result = col.query(query_embeddings=[vector], n_results=min(top_k, total))
        found = []
        for doc, meta, distance in zip(result["documents"][0], result["metadatas"][0], result["distances"][0]):
            score = max(0.0, 1.0 - float(distance))
            if score >= threshold:
                found.append({"text": doc, "score": score, "company": meta.get("company",company),
                    "source": meta.get("source","Unknown"), "url": meta.get("url",""),
                    "page": meta.get("page") or None})
        return sorted(found, key=lambda x: x["score"], reverse=True)

    def stats(self, company):
        return self._collection(company).count()
