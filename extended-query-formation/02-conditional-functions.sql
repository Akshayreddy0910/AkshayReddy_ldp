-- CASE
SELECT
    student_name,
    marks,
    CASE
        WHEN marks >= 90 THEN 'Excellent'
        WHEN marks >= 75 THEN 'Good'
        WHEN marks >= 60 THEN 'Average'
        ELSE 'Needs Improvement'
    END AS performance
FROM students;


-- COALESCE
SELECT
    student_name,
    COALESCE(email_address, 'No Email') AS email
FROM students;