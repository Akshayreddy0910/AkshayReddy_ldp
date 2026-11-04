import hashlib, re

def make_chunks(documents, company, source="", chunk_size=1000, overlap=150):
    out = []
    for doc in documents:
        text = re.sub(r"\s+", " ", doc.get("text", "")).strip()
        start = 0
        while start < len(text):
            end = min(start + chunk_size, len(text))
            piece = text[start:end].strip()
            if piece:
                identity = f"{company}|{source}|{doc.get('page')}|{start}|{piece}"
                out.append({"id": hashlib.sha1(identity.encode()).hexdigest(), "text": piece,
                    "company": company.strip(), "source": doc.get("source") or source or "Unknown",
                    "url": doc.get("url", ""), "page": doc.get("page")})
            if end == len(text): break
            start = max(end - overlap, start + 1)
    return out
