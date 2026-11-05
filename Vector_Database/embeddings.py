from sentence_transformers import SentenceTransformer

model = SentenceTransformer(
    "sentence-transformers/all-MiniLM-L6-v2"
)

sentences = [
    "The car is fast",
    "The automobile is quick",
    "I like eating pizza"
]

embeddings = model.encode(sentences)

print(embeddings.shape)
print(embeddings[0])