# Illustrative sample results (not live LLM output)

These examples demonstrate the expected shape of the pipeline. When you run the program, save the actual model outputs and compare them with these examples.

## Q1: Which products generated the highest revenue?

### Stage 1 — illustrative JSON
```json
{
  "refined_question": "Calculate total sales revenue for each product across all available sale dates, then rank products from highest to lowest revenue.",
  "target_database": "retail_demo",
  "needs_clarification": false,
  "clarification_question": null
}
```

### Stage 2 — illustrative JSON containing SQL
```json
{
  "sql": "SELECT p.product_id, p.product_name, SUM(s.quantity * s.unit_price) AS total_revenue FROM products p JOIN sales s ON s.product_id = p.product_id GROUP BY p.product_id, p.product_name ORDER BY total_revenue DESC;",
  "reason": "Joins product details to sales, sums quantity times unit price per product, and sorts by revenue."
}
```

Expected result on the provided seed data:
- Mechanical Keyboard: ₹7,500
- Laptop Stand: ₹4,500
- Wireless Mouse: ₹2,500

## Q2: How much revenue did we generate in February 2026?

Possible SQL:
```sql
SELECT SUM(quantity * unit_price) AS total_revenue
FROM sales
WHERE sale_date >= '2026-02-01'
  AND sale_date < '2026-03-01';
```
Expected result: 5,000.00

## Q3: Which customers spent the most?

This question may require a clarification about whether "spent" means total recorded sales value. If confirmed:
```sql
SELECT c.customer_id, c.customer_name,
       SUM(s.quantity * s.unit_price) AS total_spent
FROM customers c
JOIN sales s ON s.customer_id = c.customer_id
GROUP BY c.customer_id, c.customer_name
ORDER BY total_spent DESC;
```

## Q4: Which city had the most sales revenue?

Possible SQL:
```sql
SELECT c.city, SUM(s.quantity * s.unit_price) AS total_revenue
FROM customers c
JOIN sales s ON s.customer_id = c.customer_id
GROUP BY c.city
ORDER BY total_revenue DESC;
```

## Q5: What is our best product?

Expected Stage 1 behavior: ask whether "best" means highest revenue, most units sold, or most orders. Do not generate SQL until the metric is clarified.

## Evaluation checklist
- JSON parses successfully.
- Database name matches configured context.
- Ambiguous questions trigger clarification.
- SQL references only schema-defined tables and columns.
- Query is a single read-only SELECT.
- SQL executes successfully and results match the question.
