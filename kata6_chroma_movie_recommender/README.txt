KATA 6 — CHROMADB MOVIE RECOMMENDER

1. Save your movie dataset as movies.csv in this folder.
   Required columns: Title, Description, Genre, Director.
2. Open a terminal in this folder.
3. Install dependencies:
   pip install -r requirements.txt
4. Run:
   python movie_recommender.py
5. Try:
   "science fiction movies by Christopher Nolan"
   "a mind-bending movie about dreams"
   "crime drama"

The script creates a local chroma_store folder for persistent vector storage.
First run downloads the all-MiniLM-L6-v2 embedding model, so internet is needed.
