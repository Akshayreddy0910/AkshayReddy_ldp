from io import BytesIO
from pathlib import Path
import requests
from bs4 import BeautifulSoup
from pypdf import PdfReader

HEADERS = {"User-Agent": "Mozilla/5.0"}

def _pdf(content, source):
    reader = PdfReader(BytesIO(content))
    return [{"text": p.extract_text() or "", "page": i, "url": source, "source": source}
            for i, p in enumerate(reader.pages, 1) if (p.extract_text() or "").strip()]

def load_uploaded_file(file):
    name = file.name
    raw = file.getvalue()
    suffix = Path(name).suffix.lower()
    if suffix == ".pdf":
        docs = _pdf(raw, name)
    elif suffix in (".txt", ".md"):
        docs = [{"text": raw.decode("utf-8", errors="replace"), "page": None, "url": "", "source": name}]
    else:
        raise ValueError("Only PDF, TXT and MD files are supported.")
    if not docs:
        raise ValueError("No extractable text found. Scanned PDFs need OCR, which is not included.")
    return docs

def load_url(url):
    r = requests.get(url, headers=HEADERS, timeout=25)
    r.raise_for_status()
    if "pdf" in r.headers.get("content-type", "").lower() or url.lower().split("?")[0].endswith(".pdf"):
        docs = _pdf(r.content, url)
    else:
        soup = BeautifulSoup(r.text, "html.parser")
        for tag in soup(["script", "style", "nav", "footer", "header", "noscript", "svg"]):
            tag.decompose()
        title = soup.title.get_text(" ", strip=True) if soup.title else url
        docs = [{"text": soup.get_text(" ", strip=True), "page": None, "url": url, "source": title}]
    if not docs or not docs[0].get("text", "").strip():
        raise ValueError("No readable text found at this URL.")
    return docs
