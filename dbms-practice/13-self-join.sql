-- Self join
CREATE TABLE employees (
    employee_id INT PRIMARY KEY,
    employee_name VARCHAR(50),
    manager_id INT
);

INSERT INTO employees
VALUES
(1, 'Manager', NULL),
(2, 'Akshay', 1),
(3, 'Ravi', 1),
(4, 'Priya', 2);

SELECT
    e.employee_name AS employee,
    m.employee_name AS manager
FROM employees e
LEFT JOIN employees m
    ON e.manager_id = m.employee_id;