-- View
CREATE VIEW top_students AS
SELECT
    student_id,
    student_name,
    marks
FROM students
WHERE marks >= 80;

SELECT *
FROM top_students;

DROP VIEW top_students;


-- Index
CREATE INDEX idx_student_name
ON students(student_name);

SHOW INDEX FROM students;

DROP INDEX idx_student_name
ON students;