-- String functions
SELECT
    student_name,
    UPPER(student_name) AS uppercase_name,
    LOWER(student_name) AS lowercase_name,
    LENGTH(student_name) AS name_length
FROM students;


SELECT
    CONCAT(student_name, ' - ', department) AS student_details
FROM students;