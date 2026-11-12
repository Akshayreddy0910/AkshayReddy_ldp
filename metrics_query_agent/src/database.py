import sqlite3
from pathlib import Path

DB_PATH = Path(__file__).resolve().parent.parent / "metrics.db"

def get_connection():
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    return conn

def initialize_database():
    """Create a small synthetic orders table and seed it once."""
    with get_connection() as conn:
        conn.execute("""
            CREATE TABLE IF NOT EXISTS orders (
                order_id INTEGER PRIMARY KEY,
                order_date TEXT NOT NULL,
                customer_id INTEGER NOT NULL,
                amount REAL NOT NULL,
                status TEXT NOT NULL
            )
        """)
        count = conn.execute("SELECT COUNT(*) FROM orders").fetchone()[0]
        if count == 0:
            rows = [
                ("2026-01-03", 101, 120.00, "completed"),
                ("2026-01-08", 102, 250.00, "completed"),
                ("2026-01-12", 103, 80.00, "completed"),
                ("2026-01-18", 101, 300.00, "completed"),
                ("2026-01-23", 104, 150.00, "completed"),
                ("2026-02-02", 105, 400.00, "completed"),
                ("2026-02-07", 102, 175.00, "completed"),
                ("2026-02-14", 106, 225.00, "completed"),
                ("2026-02-20", 107, 100.00, "cancelled"),
                ("2026-02-25", 101, 350.00, "completed"),
                ("2026-03-04", 108, 500.00, "completed"),
                ("2026-03-09", 109, 200.00, "completed"),
                ("2026-03-16", 103, 150.00, "completed"),
                ("2026-03-21", 110, 275.00, "completed"),
                ("2026-03-27", 108, 125.00, "completed"),
            ]
            conn.executemany(
                "INSERT INTO orders (order_date, customer_id, amount, status) VALUES (?, ?, ?, ?)",
                rows
            )
        conn.commit()
