-- Department table
CREATE TABLE departments (
    department_id INT PRIMARY KEY,
    department_name VARCHAR(50) NOT NULL UNIQUE
);

INSERT INTO departments (department_id, department_name)
VALUES
(1, 'CSE'),
(2, 'ECE'),
(3, 'IT');


-- Student constraints
ALTER TABLE students
ADD PRIMARY KEY (student_id);

ALTER TABLE students
ADD COLUMN department_id INT;

UPDATE students
SET department_id =
    CASE department
        WHEN 'CSE' THEN 1
        WHEN 'ECE' THEN 2
        WHEN 'IT' THEN 3
    END
WHERE student_id IN (101, 102, 103, 104);

ALTER TABLE students
ADD CONSTRAINT fk_students_department
FOREIGN KEY (department_id)
REFERENCES departments(department_id);


-- Other constraints
CREATE TABLE courses (
    course_id INT PRIMARY KEY,
    course_name VARCHAR(50) NOT NULL,
    credits INT CHECK (credits BETWEEN 1 AND 6)
);

INSERT INTO courses
VALUES (1, 'DBMS', 4);


-- Composite key
CREATE TABLE enrollments (
    student_id INT,
    course_id INT,
    enrolled_date DATE,
    PRIMARY KEY (student_id, course_id)
);