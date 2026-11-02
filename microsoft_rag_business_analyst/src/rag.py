from openai import OpenAI
from src.config import OPENAI_API_KEY, OPENAI_MODEL

def generate_answer(question, retrieved_chunks):
    if not retrieved_chunks:
        return (
            "I couldn't find relevant information in the indexed documents. "
            "Upload or ingest the relevant company documents and try again."
        )
    context_parts = []
    for i, item in enumerate(retrieved_chunks, start=1):
        page = f", page {item['page']}" if item.get("page") else ""
        context_parts.append(
            f"[Source {i}: {item['source']}{page}]\n{item['text']}"
        )
    context = "\n\n".join(context_parts)

    if not OPENAI_API_KEY:
        return (
            "OPENAI_API_KEY is not configured, so answer generation is disabled.\n\n"
            "The retrieved evidence is shown below. Add an API key in the .env file "
            "to generate a grounded natural-language answer.\n\n" + context
        )

    client = OpenAI(api_key=OPENAI_API_KEY)
    response = client.chat.completions.create(
        model=OPENAI_MODEL,
        temperature=0.1,
        messages=[
            {
                "role": "system",
                "content": (
                    "You are a careful business research analyst. Answer only from "
                    "the supplied context. If the context does not contain the answer, "
                    "say so clearly. Cite supporting sources inline as [Source 1], "
                    "[Source 2], etc. Never invent financial figures, dates, or facts."
                ),
            },
            {
                "role": "user",
                "content": f"Question: {question}\n\nRetrieved context:\n{context}",
            },
        ],
    )
    return response.choices[0].message.content or "No answer was generated."
