# Ragas RAG Evaluation Project

This project uses Ragas 0.4.3 with a custom pass/fail `DiscreteMetric`.

## Files
- `evals.py`: loads sample questions, calls the RAG client, evaluates answers, and saves experiment results.
- `rag.py`: OpenAI-backed QA client with request logging.
- `evals/logs/`: runtime logs.
- `experiments/`: experiment output.

## Setup (Windows CMD)
1. `py -m venv .venv`
2. `.venv\\Scripts\\activate`
3. `python -m pip install -e .`
4. Copy `.env.example` to `.env` and add your OpenAI API key.
5. Run `python evals.py`.

An active OpenAI API account with available credits is required. If quota is exhausted, valid evaluation scores will not be generated and the CSV may be empty.
