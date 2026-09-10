-- Aggregate functions
SELECT
    COUNT(*) AS total_students,
    COUNT(student_id) AS total_ids,
    AVG(marks) AS average_marks,
    MAX(marks) AS highest_marks,
    MIN(marks) AS lowest_marks,
    SUM(marks) AS total_marks
FROM students;


-- GROUP BY
SELECT
    department,
    COUNT(*) AS total_students,
    AVG(marks) AS average_marks
FROM students
GROUP BY department;


-- GROUP BY with JOIN
SELECT
    d.department_name,
    COUNT(s.student_id) AS total_students,
    AVG(s.marks) AS average_marks
FROM departments d
LEFT JOIN students s
    ON d.department_id = s.department_id
GROUP BY d.department_name;


-- HAVING
SELECT
    d.department_name,
    AVG(s.marks) AS average_marks
FROM departments d
JOIN students s
    ON d.department_id = s.department_id
GROUP BY d.department_name
HAVING AVG(s.marks) > 80;