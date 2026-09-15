-- UNION
SELECT department
FROM students
WHERE department = 'CSE'

UNION

SELECT department_name
FROM departments
WHERE department_name = 'ECE';


-- UNION ALL
SELECT department
FROM students
WHERE department = 'CSE'

UNION ALL

SELECT department_name
FROM departments
WHERE department_name = 'CSE';