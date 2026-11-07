# Microsoft RAG-powered Business Analysis System

A compact end-to-end RAG application for exploring Microsoft's publicly available business documents.

## Features

- Upload PDF, TXT and Markdown documents.
- Ingest readable web pages by URL.
- Extract text, clean it, split it into overlapping chunks.
- Generate embeddings with `sentence-transformers/all-MiniLM-L6-v2` (384 dimensions).
- Store vectors and metadata in ChromaDB.
- Retrieve relevant chunks with cosine similarity.
- Generate grounded answers using OpenAI, with source references.
- Show retrieved source snippets, document names, page numbers and similarity scores.
- Retrieval-only fallback when no OpenAI API key is configured.

## Requirements

- Windows 10/11, macOS or Linux
- Python 3.10 or 3.11 recommended
- Internet connection for installing packages and downloading the embedding model
- OpenAI API key for generated answers (optional for ingestion and retrieval)

## Setup on Windows CMD

```cmd
cd microsoft_rag_business_analyst
python -m venv .venv
.venv\Scripts\activate
python -m pip install --upgrade pip
pip install -r requirements.txt
copy .env.example .env
```

Open `.env` and add your key:

```env
OPENAI_API_KEY=your_api_key_here
OPENAI_MODEL=gpt-4o-mini
```

If you do not have API credits, leave `OPENAI_API_KEY` empty. You can still ingest documents and inspect retrieved evidence; answer generation will be disabled.

## Run

```cmd
streamlit run app.py
```

The browser opens the application. Upload a Microsoft annual report PDF or paste a URL to a Microsoft official page. Wait for indexing to finish, then ask questions.

## Suggested Microsoft source material

Use official sources and add them through the URL box or download PDFs and upload them:

- Microsoft Investor Relations: https://www.microsoft.com/en-us/Investor/
- Microsoft annual reports: https://www.microsoft.com/en-us/Investor/annual-reports.aspx
- Microsoft News: https://news.microsoft.com/
- Microsoft official blog: https://blogs.microsoft.com/

The application does not silently download or claim to contain current official filings. You choose the documents to ingest, and each indexed chunk retains its source name or URL.

## How the pipeline works

1. **Input:** Upload PDF/TXT/MD or provide a web page URL.
2. **Extraction:** PDF pages are extracted with page numbers; web pages are parsed into readable text.
3. **Chunking:** Text is split into 900-character chunks with 150-character overlap.
4. **Embedding:** Sentence Transformers converts each chunk into a 384-dimensional vector.
5. **Storage:** ChromaDB stores vectors alongside original text, source, page and chunk ID.
6. **Retrieval:** The question is embedded and ChromaDB returns the top-k most similar chunks.
7. **Generation:** OpenAI receives the question plus retrieved evidence and is instructed to answer only from that evidence.
8. **Sources:** The UI displays retrieved passages and source metadata for verification.

## Project structure

```text
microsoft_rag_business_analyst/
├── app.py
├── requirements.txt
├── .env.example
├── README.md
├── src/
│   ├── __init__.py
│   ├── config.py
│   ├── ingest.py
│   ├── vector_store.py
│   └── rag.py
└── data/
    ├── uploads/
    └── sample_docs/
```

## Demo checklist

1. Start the app.
2. Upload an official Microsoft annual report PDF.
3. Ingest one or two Microsoft News/blog URLs.
4. Confirm the indexed chunk count increases.
5. Ask: "What are Microsoft's main business segments?"
6. Inspect the retrieved source chunks and page/source details.
7. Add an OpenAI API key if you want a generated answer.

## Limitations

- Web ingestion extracts readable text from a single page; it does not crawl an entire website or download linked PDFs automatically.
- Scanned PDFs may need OCR; OCR is not included.
- The demo uses a local persistent ChromaDB collection.
- Similarity retrieval can return imperfect matches. Tune chunk size, overlap and top-k based on testing.
- The LLM answer is not a substitute for checking the original financial filing.
