from functools import lru_cache

@lru_cache(maxsize=1)
def _model():
    from sentence_transformers import CrossEncoder
    return CrossEncoder("cross-encoder/ms-marco-MiniLM-L-6-v2")

def rerank_chunks(question, chunks, top_n=4):
    if not chunks: return []
    scores = _model().predict([(question, x["text"]) for x in chunks])
    ranked = []
    for item, score in zip(chunks, scores):
        row = dict(item)
        row["rerank_score"] = float(score)
        ranked.append(row)
    return sorted(ranked, key=lambda x: x["rerank_score"], reverse=True)[:top_n]
