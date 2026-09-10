-- Database setup
CREATE DATABASE IF NOT EXISTS dbms_practice;

USE dbms_practice;

SELECT DATABASE();


-- Create students table
CREATE TABLE students (
    student_id INT,
    student_name VARCHAR(50),
    age INT,
    department VARCHAR(30),
    marks INT
);

SHOW TABLES;
DESCRIBE students;