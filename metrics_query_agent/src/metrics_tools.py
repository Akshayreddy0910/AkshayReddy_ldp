from datetime import date
from langchain_core.tools import tool
from .database import get_connection

SUPPORTED_METRICS = {
    "revenue": "Sum of completed order amounts.",
    "orders": "Number of completed orders.",
    "average_order_value": "Revenue divided by completed order count.",
    "customers": "Number of distinct customers with completed orders.",
}

def _validate_month(month: str) -> tuple[str, str]:
    """Validate YYYY-MM and return inclusive start/exclusive end dates."""
    try:
        parsed = date.fromisoformat(month + "-01")
    except ValueError as exc:
        raise ValueError("Month must use YYYY-MM format, for example 2026-01.") from exc
    start = parsed.strftime("%Y-%m-01")
    if parsed.month == 12:
        end = date(parsed.year + 1, 1, 1).isoformat()
    else:
        end = date(parsed.year, parsed.month + 1, 1).isoformat()
    return start, end

@tool
def list_available_metrics() -> dict:
    """List the business metrics this agent can query."""
    return {"available_metrics": SUPPORTED_METRICS}

@tool
def get_metric_summary(metric: str, month: str) -> dict:
    """Get one business metric for a month. metric must be revenue, orders, average_order_value, or customers. month must be YYYY-MM."""
    metric = metric.strip().lower()
    if metric not in SUPPORTED_METRICS:
        return {"error": f"Unsupported metric. Choose one of: {', '.join(SUPPORTED_METRICS)}"}
    try:
        start, end = _validate_month(month.strip())
    except ValueError as exc:
        return {"error": str(exc)}

    sql = """
        SELECT
            COALESCE(SUM(amount), 0) AS revenue,
            COUNT(*) AS orders,
            COUNT(DISTINCT customer_id) AS customers
        FROM orders
        WHERE status = 'completed'
          AND order_date >= ? AND order_date < ?
    """
    with get_connection() as conn:
        row = conn.execute(sql, (start, end)).fetchone()

    revenue = round(float(row["revenue"]), 2)
    orders = int(row["orders"])
    customers = int(row["customers"])
    values = {
        "revenue": revenue,
        "orders": orders,
        "average_order_value": round(revenue / orders, 2) if orders else 0,
        "customers": customers,
    }
    return {
        "metric": metric,
        "month": month,
        "value": values[metric],
        "currency": "USD" if metric in ("revenue", "average_order_value") else None,
        "definition": SUPPORTED_METRICS[metric],
        "note": "Cancelled orders are excluded."
    }

@tool
def compare_revenue(month_one: str, month_two: str) -> dict:
    """Compare completed-order revenue for two months. Both months must use YYYY-MM format."""
    results = []
    for month in (month_one, month_two):
        result = get_metric_summary.invoke({"metric": "revenue", "month": month})
        if "error" in result:
            return result
        results.append(result)

    first, second = results
    difference = round(second["value"] - first["value"], 2)
    percent = round((difference / first["value"]) * 100, 2) if first["value"] else None
    return {
        "month_one": {"month": month_one, "revenue": first["value"]},
        "month_two": {"month": month_two, "revenue": second["value"]},
        "difference": difference,
        "percentage_change": percent,
        "direction": "increased" if difference > 0 else "decreased" if difference < 0 else "unchanged",
        "currency": "USD",
        "note": "Cancelled orders are excluded."
    }

TOOLS = [list_available_metrics, get_metric_summary, compare_revenue]
