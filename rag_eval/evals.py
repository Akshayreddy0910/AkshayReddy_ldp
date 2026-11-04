import os
from pathlib import Path
from dotenv import load_dotenv
from openai import OpenAI
from ragas import Dataset, experiment
from ragas.llms import llm_factory
from ragas.metrics import DiscreteMetric
from rag import default_rag_client

load_dotenv()
openai_client = OpenAI(api_key=os.environ.get("OPENAI_API_KEY"))
rag_client = default_rag_client(llm_client=openai_client, logdir="evals/logs")
llm = llm_factory("gpt-4o", client=openai_client)

def load_dataset():
    dataset = Dataset(name="test_dataset", backend="local/csv", root_dir="evals")
    data_samples = [
        {"question": "What is Ragas 0.3?", "grading_notes": "- experimentation as the central pillar - abstraction for datasets, experiments and metrics - supports evaluations for RAG, LLM workflows and Agents"},
        {"question": "How are experiment results stored in Ragas 0.3?", "grading_notes": "- configured using backends like local, gdrive, etc - stored under experiments/ folder"},
        {"question": "What metrics are supported in Ragas 0.3?", "grading_notes": "- discrete, numerical and ranking metrics"},
        {"question": "What is a vector database?", "grading_notes": "A vector database stores and searches vector embeddings for similarity-based retrieval"},
    ]
    for sample in data_samples:
        dataset.append(sample)
    dataset.save()
    return dataset

my_metric = DiscreteMetric(
    name="answer_quality",
    prompt="""Evaluate the response using the grading notes.
Return 'pass' if it correctly covers the important points.
Return 'fail' if it is incorrect, irrelevant, or misses important points.
Response: {response}
Grading Notes: {grading_notes}""",
    allowed_values=["pass", "fail"],
)

@experiment()
async def run_experiment(row):
    response = rag_client.query(row["question"])
    score = my_metric.score(llm=llm, response=response.get("answer", ""), grading_notes=row["grading_notes"])
    return {**row, "response": response.get("answer", ""), "score": score.value, "log_file": response.get("logs", "")}

async def main():
    dataset = load_dataset()
    print("Dataset loaded successfully:", dataset)
    results = await run_experiment.arun(dataset)
    print("Experiment results:", results)
    results.save()
    print("Experiment output folder:", Path("experiments").resolve())

if __name__ == "__main__":
    import asyncio
    asyncio.run(main())
