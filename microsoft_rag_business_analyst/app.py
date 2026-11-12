
import streamlit as st
from pathlib import Path

from src.config import UPLOAD_DIR, OPENAI_API_KEY
from src.ingest import process_file, process_url
from src.vector_store import VectorStore
from src.rag import generate_answer


st.set_page_config(
    page_title="Microsoft Business Analyst | RAG",
    page_icon="📊",
    layout="wide"
)

st.title("📊 RAG-powered Business Analysis System")

st.caption(
    "Explore company documents, retrieve evidence, "
    "and generate source-grounded answers."
)


@st.cache_resource
def get_store():
    return VectorStore()


try:
    store = get_store()

except Exception as exc:
    st.error(
        f"Could not initialize ChromaDB or embedding model: {exc}"
    )

    st.info(
        "On first launch, the embedding model downloads "
        "from Hugging Face. Check your internet connection."
    )

    st.stop()


# ---------------- DOCUMENT INGESTION ----------------

with st.sidebar:

    st.header("Document ingestion")

    st.write(
        "Add annual reports, official blog posts, "
        "press releases, or other company documents."
    )

    uploaded = st.file_uploader(
        "Upload PDF, TXT or MD",
        type=["pdf", "txt", "md"]
    )

    if st.button(
        "Process uploaded document",
        disabled=uploaded is None,
        use_container_width=True
    ):

        suffix = Path(uploaded.name).suffix.lower()

        target = UPLOAD_DIR / uploaded.name

        target.write_bytes(uploaded.getbuffer())

        with st.spinner(
            "Extracting, chunking and embedding document..."
        ):

            try:
                chunks = process_file(
                    str(target),
                    uploaded.name
                )

                count = store.add_chunks(chunks)

                st.success(
                    f"Indexed {count} chunks from {uploaded.name}."
                )

            except Exception as exc:
                st.error(
                    f"Document processing failed: {exc}"
                )

    st.divider()

    # Web page ingestion
    st.subheader("Ingest a web page")

    url = st.text_input(
        "Official document / article URL",
        placeholder="https://..."
    )

    if st.button(
        "Process URL",
        disabled=not url.strip(),
        use_container_width=True
    ):

        with st.spinner("Downloading and indexing page..."):

            try:
                chunks = process_url(url.strip())

                count = store.add_chunks(chunks)

                st.success(
                    f"Indexed {count} chunks from URL."
                )

            except Exception as exc:
                st.error(
                    f"URL processing failed: {exc}"
                )

    st.divider()

    # Database information
    st.metric(
        "Indexed chunks",
        store.count()
    )

    st.caption(
        "ChromaDB stores vectors locally in data/chroma_db/."
    )

    if not OPENAI_API_KEY:
        st.warning(
            "No OPENAI_API_KEY found. Retrieval works; "
            "generated answers require an API key."
        )

    if st.button(
        "Clear vector database",
        use_container_width=True
    ):

        store.reset()

        st.success("Vector database cleared.")

        st.rerun()


# ---------------- QUESTION ANSWERING ----------------

st.subheader("Ask the business analyst")

question = st.text_input(
    "Ask about revenue, business segments, strategy, "
    "products, risks, or company performance",

    placeholder="Example: What are Microsoft's main business segments?"
)


# Number of chunks
top_k = st.slider(
    "Number of source chunks to retrieve",
    min_value=1,
    max_value=10,
    value=5
)


# Similarity threshold
similarity_threshold = st.slider(
    "Minimum similarity score",
    min_value=0.10,
    max_value=0.90,
    value=0.50,
    step=0.05,

    help=(
        "Only chunks at or above this score "
        "are used as evidence."
    )
)


if st.button(
    "Search documents and generate answer",
    type="primary",
    disabled=not question.strip()
):

    with st.spinner(
        "Searching ChromaDB and preparing an answer..."
    ):

        try:

            # Retrieve relevant chunks
            retrieved = store.search(
                question,
                top_k=top_k,
                similarity_threshold=similarity_threshold
            )

            # Generate answer or display retrieved evidence
            answer = generate_answer(
                question,
                retrieved
            )

            st.session_state["last_answer"] = answer

            st.session_state["last_sources"] = retrieved

            st.session_state["last_threshold"] = similarity_threshold

        except Exception as exc:

            st.error(
                f"Query failed: {exc}"
            )


# ---------------- DISPLAY RESULTS ----------------

if "last_answer" in st.session_state:

    st.markdown("### Answer")

    st.write(
        st.session_state["last_answer"]
    )

    st.caption(
        "Retrieval threshold used: "
        f"{st.session_state.get('last_threshold', 0.50):.2f}"
    )

    st.markdown("### Retrieved sources")

    sources = st.session_state.get(
        "last_sources",
        []
    )

    if not sources:

        st.info(
            "No relevant chunks found. "
            "Try a different question or lower the similarity threshold."
        )

    for i, item in enumerate(sources, start=1):

        page = (
            f" · Page {item['page']}"
            if item.get("page")
            else ""
        )

        with st.expander(
            f"Source {i}: {item['source']}"
            f"{page} · Similarity: {item['score']:.3f}"
        ):

            st.write(
                item["text"]
            )


st.divider()

st.caption(
    "Important: Answers are grounded only in retrieved text. "
    "Always verify financial figures against the original company filing."
)
