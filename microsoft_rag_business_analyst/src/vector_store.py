
from pathlib import Path

import chromadb
from sentence_transformers import SentenceTransformer

from src.config import (
    CHROMA_DIR,
    COLLECTION_NAME,
    EMBEDDING_MODEL,
)


class VectorStore:
    """Local persistent vector store backed by ChromaDB."""

    def __init__(self):
        Path(CHROMA_DIR).mkdir(parents=True, exist_ok=True)

        # Load embedding model
        self.model = SentenceTransformer(EMBEDDING_MODEL)

        # Initialize ChromaDB
        self.client = chromadb.PersistentClient(
            path=str(CHROMA_DIR)
        )

        self.collection = self.client.get_or_create_collection(
            name=COLLECTION_NAME,
            metadata={"hnsw:space": "cosine"},
        )

    def add_chunks(self, chunks):
        """Generate embeddings and store document chunks."""

        if not chunks:
            return 0

        texts = [chunk["text"] for chunk in chunks]

        embeddings = self.model.encode(
            texts,
            normalize_embeddings=True,
            show_progress_bar=False,
        ).tolist()

        ids = [chunk["chunk_id"] for chunk in chunks]

        metadatas = []

        for chunk in chunks:
            metadatas.append({
                "source": str(chunk.get("source", "Unknown")),
                "page": int(chunk.get("page") or 0),
                "chunk_id": str(chunk.get("chunk_id", "")),
            })

        # Upsert prevents duplicate records for identical IDs
        self.collection.upsert(
            ids=ids,
            documents=texts,
            embeddings=embeddings,
            metadatas=metadatas,
        )

        return len(texts)

    def search(
        self,
        question,
        top_k=5,
        similarity_threshold=0.50
    ):
        """Retrieve relevant chunks using semantic similarity."""

        if self.collection.count() == 0:
            return []

        # Convert question into an embedding
        vector = self.model.encode(
            [question],
            normalize_embeddings=True,
            show_progress_bar=False,
        ).tolist()

        result = self.collection.query(
            query_embeddings=vector,
            n_results=min(
                int(top_k),
                self.collection.count()
            ),
            include=[
                "documents",
                "metadatas",
                "distances"
            ],
        )

        output = []

        documents = (result.get("documents") or [[]])[0]
        metadatas = (result.get("metadatas") or [[]])[0]
        distances = (result.get("distances") or [[]])[0]

        for text, metadata, distance in zip(
            documents,
            metadatas,
            distances
        ):

            metadata = metadata or {}

            # Convert cosine distance into similarity score
            score = max(
                0.0,
                min(1.0, 1.0 - float(distance))
            )

            # Filter irrelevant chunks
            if score < float(similarity_threshold):
                continue

            output.append({
                "text": text or "",
                "source": metadata.get("source", "Unknown"),
                "page": metadata.get("page") or None,
                "score": score,
                "chunk_id": metadata.get("chunk_id", ""),
            })

        return output

    def count(self):
        """Return total indexed chunks."""

        return int(self.collection.count())

    def reset(self):
        """Clear the vector database."""

        self.client.delete_collection(COLLECTION_NAME)

        self.collection = self.client.get_or_create_collection(
            name=COLLECTION_NAME,
            metadata={"hnsw:space": "cosine"},
        )
