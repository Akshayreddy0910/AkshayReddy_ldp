-- Subquery with aggregate function
SELECT
    student_name,
    marks
FROM students
WHERE marks > (
    SELECT AVG(marks)
    FROM students
);


-- Subquery with IN
SELECT
    student_name,
    department
FROM students
WHERE department IN (
    SELECT department_name
    FROM departments
);


-- EXISTS
SELECT
    d.department_name
FROM departments d
WHERE EXISTS (
    SELECT 1
    FROM students s
    WHERE s.department_id = d.department_id
);


-- NOT EXISTS
SELECT
    d.department_name
FROM departments d
WHERE NOT EXISTS (
    SELECT 1
    FROM students s
    WHERE s.department_id = d.department_id
);