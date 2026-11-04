from functools import lru_cache
from src.ingestion.document_loader import load_url

@lru_cache(maxsize=64)
def cached_url_load(url):
    return load_url(url)
