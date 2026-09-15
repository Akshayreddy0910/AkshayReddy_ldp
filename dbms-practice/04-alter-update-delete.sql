-- Alter table
ALTER TABLE students
ADD COLUMN email VARCHAR(100);

ALTER TABLE students
RENAME COLUMN email TO email_address;

ALTER TABLE students
ADD COLUMN status VARCHAR(20) DEFAULT 'ACTIVE';


-- Update and delete
UPDATE students
SET marks = 90
WHERE student_id = 101;

UPDATE students
SET email_address = 'akshay@gmail.com'
WHERE student_id = 101;

DELETE FROM students
WHERE student_id = 104;


-- Truncate and drop
CREATE TABLE temp_students (
    id INT,
    name VARCHAR(50)
);

TRUNCATE TABLE temp_students;

DROP TABLE temp_students;