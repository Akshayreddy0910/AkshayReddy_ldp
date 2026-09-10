-- Insert data
INSERT INTO students
(student_id, student_name, age, department, marks)
VALUES
(101, 'Akshay', 20, 'CSE', 85),
(102, 'Ravi', 21, 'ECE', 78),
(103, 'Priya', 22, 'CSE', 92),
(104, 'Rahul', 23, 'IT', 67);


-- Select data
SELECT * FROM students;

SELECT student_name
FROM students;

SELECT student_name, marks
FROM students;