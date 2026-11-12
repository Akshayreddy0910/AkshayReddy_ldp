def rewrite_query(question, history, client, model):
    if not history: return question
    recent = history[-3:]
    conversation = "\n".join(f"User: {x['question']}\nAssistant: {x['answer']}" for x in recent)
    prompt = f"""Rewrite the latest question as a standalone search query using conversation only to resolve references.
Do not answer or add facts. If already standalone, return unchanged.
Conversation:
{conversation}
Latest question: {question}
Standalone search query:"""
    try:
        return client.generate(model, prompt, system="You rewrite search queries accurately.", temperature=0).strip().strip('"') or question
    except Exception:
        return question
