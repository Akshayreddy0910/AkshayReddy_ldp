from sentence_transformers import SentenceTransformer
from sklearn.metrics.pairwise import cosine_similarity

sentences = [
    "I love learning artificial intelligence",
    "I enjoy studying AI",
    "I like playing cricket"
]

models = [
    "sentence-transformers/all-MiniLM-L6-v2",
    "sentence-transformers/all-mpnet-base-v2"
]

for model_name in models:
    model = SentenceTransformer(model_name)
    embeddings = model.encode(sentences)

    scores = cosine_similarity(embeddings)

    print("\nModel:", model_name)
    print("Embedding shape:", embeddings.shape)
    print("Similarity between first two sentences:",
          round(float(scores[0, 1]), 3))