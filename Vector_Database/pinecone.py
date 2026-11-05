from pinecone import Pinecone, ServerlessSpec
from sentence_transformers import SentenceTransformer
import time

# 1. Connect to Pinecone
API_KEY = "pcsk_5sJ4Zd_7zgAm2ReTAyM4JpFC4XjFGYABP8iAznHJZN8fxq4DzuRQt3auxQ3GEp5Y14HGmn"
INDEX_NAME = "my-index"

pc = Pinecone(api_key=API_KEY)

# 2. Load the embedding model (384 dimensions)
model = SentenceTransformer("sentence-transformers/all-MiniLM-L6-v2")

# 3. Create the index if it doesn't exist
existing_indexes = pc.list_indexes().names()

if INDEX_NAME not in existing_indexes:
    pc.create_index(
        name=INDEX_NAME,
        dimension=384,
        metric="cosine",
        spec=ServerlessSpec(
            cloud="aws",
            region="us-east-1"
        )
    )

    # Wait until the index is ready
    while not pc.describe_index(INDEX_NAME).status["ready"]:
        time.sleep(1)

# 4. Connect to the index
index = pc.Index(INDEX_NAME)

# 5. Prepare sample documents
documents = [
    "Pinecone is a vector database for similarity search.",
    "Embeddings convert text into numerical vectors.",
    "Chunking divides large documents into smaller pieces.",
    "Hugging Face provides pretrained machine learning models."
]

# 6. Generate embeddings
vectors = model.encode(documents).tolist()

# 7. Store vectors and text metadata
records = []

for i, (document, vector) in enumerate(zip(documents, vectors)):
    records.append({
        "id": f"doc-{i}",
        "values": vector,
        "metadata": {"text": document}
    })

index.upsert(vectors=records)

print("Documents stored successfully!")

# 8. Query the database
question = "What is a vector database?"
query_vector = model.encode(question).tolist()

results = index.query(
    vector=query_vector,
    top_k=3,
    include_metadata=True
)

# 9. Display matching documents
for match in results["matches"]:
    print(f"\nScore: {match['score']:.4f}")
    print(f"Text: {match['metadata']['text']}")

print(model.max_seq_length)