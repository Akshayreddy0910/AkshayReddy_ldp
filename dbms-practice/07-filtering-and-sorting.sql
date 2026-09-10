-- Comparison operators
SELECT *
FROM students
WHERE marks > 80;

SELECT *
FROM students
WHERE marks >= 80;

SELECT *
FROM students
WHERE marks < 80;

SELECT *
FROM students
WHERE marks <= 80;

SELECT *
FROM students
WHERE department <> 'CSE';


-- AND, OR, NOT
SELECT *
FROM students
WHERE department = 'CSE'
AND marks > 80;

SELECT *
FROM students
WHERE department = 'CSE'
OR department = 'ECE';

SELECT *
FROM students
WHERE NOT department = 'CSE';


-- IN and BETWEEN
SELECT *
FROM students
WHERE department IN ('CSE', 'IT');

SELECT *
FROM students
WHERE marks BETWEEN 70 AND 90;


-- LIKE
SELECT *
FROM students
WHERE student_name LIKE 'A%';

SELECT *
FROM students
WHERE student_name LIKE '%a%';


-- NULL
SELECT *
FROM students
WHERE email_address IS NULL;

SELECT *
FROM students
WHERE email_address IS NOT NULL;


-- ORDER BY
SELECT student_name, marks
FROM students
ORDER BY marks ASC;

SELECT student_name, marks
FROM students
ORDER BY marks DESC;


-- DISTINCT
SELECT DISTINCT department
FROM students;


-- LIMIT and OFFSET
SELECT *
FROM students
ORDER BY marks DESC
LIMIT 2;

SELECT *
FROM students
ORDER BY student_id
LIMIT 2 OFFSET 1;