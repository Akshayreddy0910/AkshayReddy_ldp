-- Trigger
CREATE TABLE student_log (
    log_id INT AUTO_INCREMENT PRIMARY KEY,
    student_id INT,
    action VARCHAR(20),
    log_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

DELIMITER //

CREATE TRIGGER after_student_insert
AFTER INSERT ON students
FOR EACH ROW
BEGIN
    INSERT INTO student_log (student_id, action)
    VALUES (NEW.student_id, 'INSERT');
END //

DELIMITER ;

INSERT INTO students
(student_id, student_name, age, department, marks, department_id)
VALUES
(105, 'Kiran', 21, 'CSE', 88, 1);

SELECT *
FROM student_log;