-- Index
CREATE INDEX idx_student_name
ON students(student_name);

SHOW INDEX FROM students;

SELECT *
FROM students
WHERE student_name = 'Akshay';

DROP INDEX idx_student_name
ON students;