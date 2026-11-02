import json
import os
import re
import sqlite3
from pathlib import Path

from dotenv import load_dotenv
from openai import OpenAI

ROOT = Path(__file__).resolve().parents[1]
load_dotenv(ROOT / ".env")

COMPANY_NAME = "RetailCo"
DATABASE_NAME = "retail_demo"
BUSINESS_DESCRIPTION = "A small e-commerce retailer selling products to customers."
DB_PATH = ROOT / "company.db"
SCHEMA_PATH = ROOT / "schemas" / "company_schema.sql"
MODEL = os.getenv("OPENAI_MODEL", "gpt-4.1-mini")


def load_schema_sql():
    return SCHEMA_PATH.read_text(encoding="utf-8")


def create_demo_database():
    """Create a fresh local demo DB from the supplied schema and seed data."""
    if DB_PATH.exists():
        DB_PATH.unlink()
    sql = load_schema_sql()
    with sqlite3.connect(DB_PATH) as conn:
        conn.executescript(sql)
    print(f"Created demo database: {DB_PATH}")


def schema_summary():
    return (
        "products(product_id, product_name, category); "
        "customers(customer_id, customer_name, city); "
        "sales(sale_id, product_id, customer_id, sale_date, quantity, unit_price). "
        "Relationships: sales.product_id -> products.product_id; "
        "sales.customer_id -> customers.customer_id. "
        "Revenue is quantity * unit_price."
    )


def call_llm(system_prompt: str, user_content: str) -> str:
    api_key = os.getenv("OPENAI_API_KEY")
    if not api_key or api_key == "put_your_api_key_here":
        raise RuntimeError(
            "Set OPENAI_API_KEY in the project .env file before running the LLM pipeline."
        )
    client = OpenAI(api_key=api_key)
    response = client.chat.completions.create(
        model=MODEL,
        temperature=0,
        response_format={"type": "json_object"},
        messages=[
            {"role": "system", "content": system_prompt},
            {"role": "user", "content": user_content},
        ],
    )
    return response.choices[0].message.content or "{}"


def refine_question(question: str) -> dict:
    template = (ROOT / "prompts" / "question_refinement.txt").read_text(encoding="utf-8")
    # Keep the prompt template's placeholders separate from user content.
    prompt = template.format(
        company_name=COMPANY_NAME,
        database_name=DATABASE_NAME,
        business_description=BUSINESS_DESCRIPTION,
        schema_summary=schema_summary(),
        user_question=question,
    )
    result = json.loads(call_llm(
        "Follow the user's instructions exactly. Return valid JSON only.",
        prompt
    ))
    required = {"refined_question", "target_database", "needs_clarification", "clarification_question"}
    missing = required - result.keys()
    if missing:
        raise ValueError(f"Stage 1 JSON is missing fields: {sorted(missing)}")
    if result["target_database"] != DATABASE_NAME:
        raise ValueError("Stage 1 returned a database name different from configured context.")
    return result


def generate_sql(refined_question: str) -> dict:
    template = (ROOT / "prompts" / "sql_generation.txt").read_text(encoding="utf-8")
    prompt = template.format(
        database_name=DATABASE_NAME,
        refined_question=refined_question,
        schema=load_schema_sql(),
    )
    result = json.loads(call_llm(
        "Generate a schema-grounded, read-only SQL query. Return valid JSON only.",
        prompt
    ))
    if "sql" not in result:
        raise ValueError("Stage 2 JSON must contain the 'sql' field.")
    return result


def validate_read_only_select(sql: str):
    if not isinstance(sql, str) or not sql.strip():
        raise ValueError("SQL is empty.")
    # Strip one trailing semicolon and reject multiple statements.
    candidate = sql.strip()
    if candidate.endswith(";"):
        candidate = candidate[:-1].rstrip()
    if ";" in candidate:
        raise ValueError("Only one SQL statement is allowed.")
    if not re.match(r"(?is)^SELECT\b", candidate):
        raise ValueError("Only SELECT queries are allowed.")
    forbidden = re.compile(
        r"(?is)\b(INSERT|UPDATE|DELETE|DROP|ALTER|CREATE|REPLACE|ATTACH|DETACH|PRAGMA|VACUUM|REINDEX)\b"
    )
    if forbidden.search(candidate):
        raise ValueError("Query contains a forbidden SQL keyword.")
    return candidate


def execute_read_only(sql: str):
    safe_sql = validate_read_only_select(sql)
    # mode=ro opens SQLite without write permissions.
    uri = f"file:{DB_PATH.as_posix()}?mode=ro"
    with sqlite3.connect(uri, uri=True) as conn:
        conn.row_factory = sqlite3.Row
        cursor = conn.execute(safe_sql)
        return [dict(row) for row in cursor.fetchall()]


def run_pipeline(question: str):
    print("\n=== USER QUESTION ===")
    print(question)

    stage1 = refine_question(question)
    print("\n=== STAGE 1: REFINED JSON ===")
    print(json.dumps(stage1, indent=2, ensure_ascii=False))

    if stage1["needs_clarification"]:
        print("\nClarification needed:", stage1["clarification_question"])
        return

    stage2 = generate_sql(stage1["refined_question"])
    print("\n=== STAGE 2: SQL GENERATION JSON ===")
    print(json.dumps(stage2, indent=2, ensure_ascii=False))

    if not stage2["sql"]:
        print("\nSQL not generated:", stage2.get("reason", "Insufficient schema information."))
        return

    rows = execute_read_only(stage2["sql"])
    print("\n=== QUERY RESULTS ===")
    print(json.dumps(rows, indent=2, ensure_ascii=False))


if __name__ == "__main__":
    create_demo_database()
    question = input(
        "\nEnter a business question (e.g. Which products generated the highest revenue?): "
    ).strip()
    if question:
        try:
            run_pipeline(question)
        except Exception as exc:
            print(f"\nPipeline failed: {exc}")
            print("Check the API key, model access, prompt output, and database schema.")
