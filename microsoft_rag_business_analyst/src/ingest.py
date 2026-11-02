from pathlib import Path
from typing import List, Dict
import hashlib
import requests
from bs4 import BeautifulSoup
from pypdf import PdfReader

def clean_text(text: str) -> str:
    return " ".join((text or "").replace("\x00", " ").split())

def extract_pdf(path: str) -> List[Dict]:
    reader = PdfReader(path)
    pages = []
    for page_no, page in enumerate(reader.pages, start=1):
        text = clean_text(page.extract_text() or "")
        if text:
            pages.append({"text": text, "page": page_no})
    return pages

def extract_txt(path: str) -> List[Dict]:
    text = Path(path).read_text(encoding="utf-8", errors="ignore")
    return [{"text": clean_text(text), "page": None}]

def extract_url(url: str) -> List[Dict]:
    headers = {"User-Agent": "Mozilla/5.0 (compatible; BusinessRAG/1.0)"}
    response = requests.get(url, headers=headers, timeout=25)
    response.raise_for_status()
    soup = BeautifulSoup(response.text, "html.parser")
    for tag in soup(["script", "style", "nav", "footer", "header", "noscript"]):
        tag.decompose()
    title = soup.title.get_text(" ", strip=True) if soup.title else url
    text = clean_text(soup.get_text(" ", strip=True))
    if not text:
        raise ValueError("No readable text was found at this URL.")
    return [{"text": f"Title: {title}\nURL: {url}\n\n{text}", "page": None}]

def chunk_pages(pages: List[Dict], source: str, chunk_size=900, overlap=150):
    chunks = []
    for item in pages:
        text = item["text"]
        start = 0
        while start < len(text):
            end = min(start + chunk_size, len(text))
            piece = text[start:end].strip()
            if piece:
                digest = hashlib.sha1(
                    f"{source}|{item.get('page')}|{start}|{piece}".encode("utf-8")
                ).hexdigest()[:16]
                chunks.append({
                    "text": piece,
                    "source": source,
                    "page": item.get("page"),
                    "chunk_id": digest,
                })
            if end == len(text):
                break
            start = max(end - overlap, start + 1)
    return chunks

def process_file(path: str, display_name: str = None):
    suffix = Path(path).suffix.lower()
    if suffix == ".pdf":
        pages = extract_pdf(path)
    elif suffix in (".txt", ".md"):
        pages = extract_txt(path)
    else:
        raise ValueError("Supported file types: PDF, TXT, MD")
    return chunk_pages(pages, display_name or Path(path).name)

def process_url(url: str):
    return chunk_pages(extract_url(url), url)
