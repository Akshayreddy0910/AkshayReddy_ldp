import json
import os
from datetime import datetime, timezone
from pathlib import Path

class SimpleRAGClient:
    """Simple OpenAI-backed question-answering client for the evaluation demo."""
    def __init__(self, llm_client, logdir="evals/logs"):
        self.llm_client = llm_client
        self.logdir = Path(logdir)
        self.logdir.mkdir(parents=True, exist_ok=True)

    def query(self, question):
        result = self.llm_client.chat.completions.create(
            model=os.getenv("OPENAI_MODEL", "gpt-4o-mini"),
            messages=[
                {"role": "system", "content": "Answer clearly and accurately. If unsure, say so."},
                {"role": "user", "content": question},
            ],
            temperature=0,
        )
        answer = result.choices[0].message.content or ""
        path = self.logdir / f"query_{datetime.now(timezone.utc).strftime('%Y%m%d_%H%M%S_%f')}.json"
        path.write_text(json.dumps({"question": question, "answer": answer}, indent=2), encoding="utf-8")
        return {"answer": answer, "logs": str(path)}

def default_rag_client(llm_client, logdir="evals/logs"):
    return SimpleRAGClient(llm_client, logdir)
