-- Subquery with aggregate function
SELECT student_name, marks
FROM students
WHERE marks > (
    SELECT AVG(marks)
    FROM students
);


-- Subquery with MAX
SELECT student_name, marks
FROM students
WHERE marks = (
    SELECT MAX(marks)
    FROM students
);


-- Subquery with IN
SELECT student_name, department
FROM students
WHERE department IN (
    SELECT department_name
    FROM departments
);