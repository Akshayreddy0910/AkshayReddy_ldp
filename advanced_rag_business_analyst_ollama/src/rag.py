def answer_with_context(client, model, question, chunks):
    context = "\n\n".join(
        f"[Source {i}: {x.get('source','Unknown')}, page {x.get('page') or 'N/A'}]\n{x['text']}"
        for i, x in enumerate(chunks, 1)
    )
    prompt = f"""Answer using only the evidence below. If the evidence is insufficient, say so.
Do not invent facts or numbers. Cite claims with [Source 1], [Source 2], etc.

EVIDENCE:
{context}

QUESTION:
{question}

Provide a clear business-oriented answer."""
    return client.generate(model, prompt,
        system="You are a careful business analyst. Ground factual claims in the supplied evidence.")
