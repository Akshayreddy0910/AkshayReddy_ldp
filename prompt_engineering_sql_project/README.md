# Prompt Engineering: Business Question to SQL

A two-stage LLM prototype for the assignment:
1. Refine a generic business question into JSON.
2. Generate SQL using the refined question and the supplied schema.

## Project structure

- `prompts/question_refinement.txt` — Stage 1 prompt
- `prompts/sql_generation.txt` — Stage 2 prompt
- `schemas/company_schema.sql` — sample SQLite schema and seed data
- `examples/test_cases.json` — generic questions to test
- `outputs/sample_results.md` — illustrative outputs for documentation
- `src/main.py` — pipeline, validation, and safe read-only execution
- `requirements.txt` — dependencies
- `.env.example` — environment-variable template

## Setup

Use Python 3.10+.

```bash
python -m venv .venv
```

Windows PowerShell:
```powershell
.venv\Scripts\Activate.ps1
pip install -r requirements.txt
Copy-Item .env.example .env
```

Open `.env` and add your API key. Do not commit `.env` to Git.

Then run:
```powershell
python src/main.py
```

The example uses the OpenAI API through the official `openai` Python package. API usage may incur charges. If your mentor requires a different provider, the two prompt files can be reused and only the API-call function needs changing.

## Important notes

- Stage 1 uses explicitly supplied company/database context. It must not guess the database.
- Stage 2 receives a schema and must use only its listed tables and columns.
- The sample database is SQLite. If your mentor supplied a schema or specified MySQL, replace the sample schema and adapt the SQL dialect.
- The code permits only a single read-only `SELECT` query and executes it with SQLite's read-only connection mode.
- This is a learning prototype, not production-ready text-to-SQL. Review SQL before using it with real company data.
- Example results in `outputs/sample_results.md` are illustrative and are not claims of live LLM execution.
