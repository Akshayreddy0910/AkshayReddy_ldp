-- Date functions
SELECT
    CURDATE() AS current_date,
    CURRENT_TIMESTAMP AS current_timestamp;


SELECT
    student_name,
    CURDATE() AS today
FROM students;