"""
Kata 6: Movie Recommendation System using ChromaDB

Input CSV columns: Title, Description, Genre, Director
Install: pip install -r requirements.txt
Run: python movie_recommender.py
"""

import re
import pandas as pd
import chromadb
from sentence_transformers import SentenceTransformer

CSV_PATH = "movies.csv"
COLLECTION_NAME = "movie_recommendations"
MODEL_NAME = "all-MiniLM-L6-v2"


def normalize_columns(df):
    """Accept column names such as title/TITLE/ Movie Title."""
    df.columns = [re.sub(r"[^a-z]", "", str(c).lower()) for c in df.columns]
    aliases = {
        "title": ["title", "movietitle", "name"],
        "description": ["description", "plot", "overview", "summary"],
        "genre": ["genre", "category"],
        "director": ["director", "filmmaker"],
    }
    rename = {}
    for standard, possible_names in aliases.items():
        found = next((c for c in possible_names if c in df.columns), None)
        if found:
            rename[found] = standard
    df = df.rename(columns=rename)
    missing = [c for c in ["title", "description", "genre", "director"] if c not in df.columns]
    if missing:
        raise ValueError(f"CSV is missing columns: {missing}. Required: Title, Description, Genre, Director.")
    return df[["title", "description", "genre", "director"]].fillna("")


def main():
    try:
        movies = normalize_columns(pd.read_csv(CSV_PATH))
    except FileNotFoundError:
        print(f"Could not find {CSV_PATH}. Put your movie dataset CSV beside this script.")
        return

    # 1. Load an embedding model and embed every movie description.
    model = SentenceTransformer(MODEL_NAME)

    # 2. Create a persistent ChromaDB collection.
    client = chromadb.PersistentClient(path="./chroma_store")
    collection = client.get_or_create_collection(
        name=COLLECTION_NAME,
        metadata={"hnsw:space": "cosine"}
    )

    # Rebuild the collection each run so edits to the CSV are reflected.
    existing = collection.get()
    if existing["ids"]:
        collection.delete(ids=existing["ids"])

    ids, docs, metas = [], [], []
    for i, row in movies.iterrows():
        description = str(row["description"]).strip()
        if not description:
            continue
        ids.append(f"movie-{i}")
        docs.append(description)
        metas.append({
            "title": str(row["title"]),
            "genre": str(row["genre"]),
            "director": str(row["director"]),
        })

    if not docs:
        print("No movie descriptions were found in the CSV.")
        return

    embeddings = model.encode(docs, normalize_embeddings=True).tolist()
    collection.add(ids=ids, documents=docs, metadatas=metas, embeddings=embeddings)
    print(f"Indexed {len(docs)} movies in ChromaDB.")

    # 3. Search using a natural-language query and optional metadata filters.
    while True:
        query = input("\nDescribe a movie you want (or type 'exit'): ").strip()
        if query.lower() in {"exit", "quit"}:
            break
        if not query:
            continue

        # Match exact genre/director values found in the dataset.
        # Example: "science fiction movies by Christopher Nolan"
        query_lower = query.lower()
        where_conditions = []

        genres = sorted(set(str(x).strip() for x in movies["genre"] if str(x).strip()),
                        key=len, reverse=True)
        directors = sorted(set(str(x).strip() for x in movies["director"] if str(x).strip()),
                           key=len, reverse=True)

        matched_genre = next((g for g in genres if g.lower() in query_lower), None)
        matched_director = next((d for d in directors if d.lower() in query_lower), None)

        if matched_genre:
            where_conditions.append({"genre": {"$eq": matched_genre}})
        if matched_director:
            where_conditions.append({"director": {"$eq": matched_director}})

        where_filter = None
        if len(where_conditions) == 1:
            where_filter = where_conditions[0]
        elif len(where_conditions) > 1:
            where_filter = {"$and": where_conditions}

        query_embedding = model.encode([query], normalize_embeddings=True).tolist()
        results = collection.query(
            query_embeddings=query_embedding,
            n_results=min(5, collection.count()),
            where=where_filter,
            include=["documents", "metadatas", "distances"],
        )

        print("\nTop movie recommendations:")
        if not results["ids"] or not results["ids"][0]:
            print("No matches found. Try a broader query.")
            continue

        for rank, (movie_id, description, metadata, distance) in enumerate(
            zip(results["ids"][0], results["documents"][0],
                results["metadatas"][0], results["distances"][0]), start=1
        ):
            print(f"\n{rank}. {metadata['title']}")
            print(f"   Genre: {metadata['genre']} | Director: {metadata['director']}")
            print(f"   Similarity distance: {distance:.4f} (lower is closer)")
            print(f"   {description[:300]}{'...' if len(description) > 300 else ''}")


if __name__ == "__main__":
    main()
