-- Sample company database for the assignment (SQLite)
CREATE TABLE products (
    product_id INTEGER PRIMARY KEY,
    product_name TEXT NOT NULL,
    category TEXT NOT NULL
);

CREATE TABLE customers (
    customer_id INTEGER PRIMARY KEY,
    customer_name TEXT NOT NULL,
    city TEXT NOT NULL
);

CREATE TABLE sales (
    sale_id INTEGER PRIMARY KEY,
    product_id INTEGER NOT NULL,
    customer_id INTEGER NOT NULL,
    sale_date TEXT NOT NULL, -- ISO date: YYYY-MM-DD
    quantity INTEGER NOT NULL CHECK (quantity > 0),
    unit_price REAL NOT NULL CHECK (unit_price >= 0),
    FOREIGN KEY (product_id) REFERENCES products(product_id),
    FOREIGN KEY (customer_id) REFERENCES customers(customer_id)
);

INSERT INTO products (product_id, product_name, category) VALUES
(1, 'Wireless Mouse', 'Accessories'),
(2, 'Mechanical Keyboard', 'Accessories'),
(3, 'Laptop Stand', 'Office');

INSERT INTO customers (customer_id, customer_name, city) VALUES
(1, 'Asha', 'Hyderabad'),
(2, 'Rahul', 'Bengaluru'),
(3, 'Mina', 'Hyderabad');

INSERT INTO sales (sale_id, product_id, customer_id, sale_date, quantity, unit_price) VALUES
(1, 1, 1, '2026-01-10', 3, 500.00),
(2, 2, 2, '2026-01-12', 2, 2500.00),
(3, 1, 3, '2026-02-05', 2, 500.00),
(4, 3, 1, '2026-02-11', 4, 750.00),
(5, 2, 3, '2026-03-02', 1, 2500.00),
(6, 3, 2, '2026-03-07', 2, 750.00);
