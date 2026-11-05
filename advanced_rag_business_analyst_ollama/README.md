# Advanced RAG Business Analyst — Ollama Edition

Local RAG application using Streamlit, Ollama, ChromaDB and Sentence Transformers. No OpenAI key or paid API is required.

## Features
- Ollama local answer generation and installed-model selector.
- PDF, TXT, Markdown, webpage and direct-PDF URL ingestion.
- Text chunking with overlap and source/page metadata.
- Company-specific ChromaDB collections.
- Semantic retrieval with configurable similarity threshold.
- Optional cross-encoder reranking.
- Ollama-powered follow-up query rewriting.
- Session conversation history.
- Web search, webpage fetch/ingestion and safe arithmetic calculator.
- URL caching.

## Windows setup

1. Open Ollama. Check it from CMD:
   ```bash
   ollama --version
   ollama list
   ```
2. If no model is installed, download a smaller starting model:
   ```bash
   ollama pull llama3.2
   ```
3. Open CMD in this project folder:
   ```bash
   python -m venv .venv
   .venv\Scripts\activate
   python -m pip install --upgrade pip
   pip install -r requirements.txt
   ```
4. Start:
   ```bash
   python -m streamlit run app.py
   ```
5. Open the local URL printed in CMD (normally http://localhost:8501).

## Usage
- Choose an installed Ollama model in the sidebar.
- Set a company name, e.g. Microsoft.
- Upload PDF/TXT/MD or ingest a webpage/PDF URL.
- Ask questions using the same company label.
- Enable reranking if desired. Its cross-encoder downloads on first use.

## Tools
- Web search via DuckDuckGo (internet required).
- Fetch webpage and index it.
- Calculator supports numbers, parentheses, +, -, *, /, ** and %.
- Reranking uses `cross-encoder/ms-marco-MiniLM-L-6-v2`.
- Query rewriting uses the selected local Ollama model.

## Troubleshooting
- **Ollama connection error:** open Ollama, run `ollama list`, refresh Streamlit. Default API URL is `http://localhost:11434`.
- **Model missing:** run `ollama pull MODEL_NAME`; use the exact tag shown by `ollama list`.
- **Streamlit not recognized:** use `python -m streamlit run app.py`.
- **First run is slow:** SentenceTransformer downloads the embedding model. Reranker downloads separately when first enabled.
- **No text in PDF:** scanned PDFs need OCR; OCR is not included.
- **Web search fails:** requires internet and may be temporarily unavailable; local RAG still works.
- **Port busy:** `python -m streamlit run app.py --server.port 8502`.

## Limitations
Ollama model performance depends on hardware. Embedding and reranking models are separate from the chat model. Similarity is a ranking signal, not proof of correctness. Web sources should be verified. Chat history is session-only, not persistent long-term memory. This is a learning/development project, not production security-reviewed software.
