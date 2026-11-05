import streamlit as st
from src.config import DEFAULT_OLLAMA_MODEL
from src.ollama_client import OllamaClient
from src.retrieval.vector_store import CompanyVectorStore
from src.ingestion.document_loader import load_uploaded_file
from src.ingestion.chunking import make_chunks
from src.retrieval.query_rewriter import rewrite_query
from src.retrieval.reranker import rerank_chunks
from src.agents.tools import search_web, fetch_webpage, calculate
from src.caching.cache_manager import cached_url_load
from src.rag import answer_with_context

st.set_page_config(page_title="Advanced RAG Business Analyst", page_icon="🔎", layout="wide")
st.title("🔎 Advanced RAG Business Analyst — Ollama Edition")
st.caption("Local LLM · ChromaDB · semantic retrieval · optional reranking · research tools")

@st.cache_resource
def get_store():
    return CompanyVectorStore()

store = get_store()
if "history" not in st.session_state:
    st.session_state.history = []
if "model" not in st.session_state:
    st.session_state.model = DEFAULT_OLLAMA_MODEL

with st.sidebar:
    st.header("Ollama settings")
    ollama_url = st.text_input("Ollama URL", "http://localhost:11434")
    client = OllamaClient(ollama_url)
    try:
        installed = [m["name"] for m in client.list_models()]
        if installed:
            idx = installed.index(st.session_state.model) if st.session_state.model in installed else 0
            st.session_state.model = st.selectbox("Installed model", installed, index=idx)
            st.success("Ollama connected")
        else:
            st.session_state.model = st.text_input("Model name", st.session_state.model)
            st.warning("No models found. Run: ollama pull llama3.2")
    except Exception as e:
        st.session_state.model = st.text_input("Model name", st.session_state.model)
        st.error("Ollama is not reachable. Open the Ollama app.")
        st.caption(str(e))

    st.divider()
    company = st.text_input("Company / collection", "Microsoft")
    upload = st.file_uploader("Upload PDF, TXT or MD", type=["pdf", "txt", "md"])
    if st.button("Ingest uploaded file", disabled=upload is None):
        try:
            docs = load_uploaded_file(upload)
            n = store.add_chunks(make_chunks(docs, company, upload.name))
            st.success(f"Indexed {n} chunks.")
        except Exception as e:
            st.error(f"Ingestion failed: {e}")

    source_url = st.text_input("Webpage or PDF URL")
    if st.button("Ingest URL", disabled=not source_url.strip()):
        try:
            docs = cached_url_load(source_url.strip())
            n = store.add_chunks(make_chunks(docs, company, source_url.strip()))
            st.success(f"Indexed {n} chunks.")
        except Exception as e:
            st.error(f"URL ingestion failed: {e}")

    st.divider()
    top_k = st.slider("Initial retrieval count", 3, 15, 8)
    threshold = st.slider("Similarity threshold", 0.0, 1.0, 0.30, 0.05)
    use_reranker = st.checkbox("Enable cross-encoder reranking", False)
    final_k = st.slider("Final context chunks", 1, 8, 4)
    if st.button("Clear chat"):
        st.session_state.history = []
        st.rerun()

chat_tab, tools_tab, kb_tab = st.tabs(["Ask questions", "Research tools", "Knowledge base"])
with chat_tab:
    question = st.chat_input("Ask about your indexed business documents...")
    if question:
        try:
            client.check_model(st.session_state.model)
            search_query = rewrite_query(question, st.session_state.history, client, st.session_state.model)
            hits = store.search(company, search_query, top_k, threshold)
            if use_reranker and hits:
                hits = rerank_chunks(question, hits, final_k)
            else:
                hits = hits[:final_k]
            with st.chat_message("user"):
                st.write(question)
            with st.chat_message("assistant"):
                if not hits:
                    answer = "I couldn't find sufficiently relevant information in the indexed documents."
                    st.warning(answer)
                else:
                    answer = answer_with_context(client, st.session_state.model, question, hits)
                    st.markdown(answer)
                    with st.expander("Retrieved evidence and sources"):
                        for i, h in enumerate(hits, 1):
                            st.markdown(f"**[{i}] {h['source']}** · similarity {h['score']:.3f}")
                            st.write(h["text"])
                            if h.get("url"):
                                st.caption(h["url"])
            st.session_state.history.append({"question": question, "answer": answer})
            st.session_state.history = st.session_state.history[-10:]
        except Exception as e:
            st.error(f"Could not answer: {e}")
            st.info("Check Ollama is running and the selected model is installed.")
    for turn in st.session_state.history:
        with st.chat_message("user"):
            st.write(turn["question"])
        with st.chat_message("assistant"):
            st.write(turn["answer"])

with tools_tab:
    q = st.text_input("Search the web", placeholder="Microsoft annual report revenue")
    if st.button("Search web", disabled=not q.strip()):
        for item in search_web(q, 6):
            if item.get("error"):
                st.error(item["error"])
            else:
                st.markdown(f"**[{item.get('title') or item.get('href')}]({item.get('href')})**")
                st.write(item.get("body", ""))
    st.divider()
    page_url = st.text_input("Fetch and index webpage URL")
    if st.button("Fetch and index", disabled=not page_url.strip()):
        try:
            docs = fetch_webpage(page_url.strip())
            n = store.add_chunks(make_chunks(docs, company, page_url.strip()))
            st.success(f"Indexed {n} chunks.")
        except Exception as e:
            st.error(str(e))
    st.divider()
    expr = st.text_input("Calculator expression", placeholder="12500000 * 0.18")
    if st.button("Calculate", disabled=not expr.strip()):
        try:
            st.code(f"{expr} = {calculate(expr)}")
        except Exception as e:
            st.error(str(e))

with kb_tab:
    st.metric("Chunks in this company collection", store.stats(company))
    st.caption("Use the same company label when ingesting and querying documents.")
