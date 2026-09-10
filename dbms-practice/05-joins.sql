-- Inner join
SELECT
    s.student_id,
    s.student_name,
    d.department_name,
    s.marks
FROM students s
INNER JOIN departments d
    ON s.department_id = d.department_id;


-- Left join
SELECT
    d.department_name,
    s.student_name
FROM departments d
LEFT JOIN students s
    ON d.department_id = s.department_id;


-- Right join
SELECT
    d.department_name,
    s.student_name
FROM students s
RIGHT JOIN departments d
    ON s.department_id = d.department_id;


-- Full outer join
SELECT
    d.department_name,
    s.student_name
FROM departments d
LEFT JOIN students s
    ON d.department_id = s.department_id

UNION

SELECT
    d.department_name,
    s.student_name
FROM departments d
RIGHT JOIN students s
    ON d.department_id = s.department_id;


-- Cross join
SELECT
    s.student_name,
    d.department_name
FROM students s
CROSS JOIN departments d;