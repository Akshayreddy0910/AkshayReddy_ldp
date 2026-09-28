package com.example.spring_boot_testing_practice.service;

import com.example.spring_boot_testing_practice.model.Student;
import com.example.spring_boot_testing_practice.repository.StudentRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentService {

    private static final Logger logger =
            LoggerFactory.getLogger(StudentService.class);

    private final StudentRepository studentRepository;

    public StudentService(StudentRepository studentRepository) {
        this.studentRepository = studentRepository;
    }

    public List<Student> getAllStudents() {
        logger.info("Fetching all students");
        return studentRepository.findAll();
    }

    public Student getStudentById(Long id) {

        logger.info("Fetching student with id: {}", id);

        return studentRepository.findById(id)
                .orElseThrow(() -> {
                    logger.warn("Student not found with id: {}", id);
                    return new RuntimeException(
                            "Student not found with id: " + id
                    );
                });
    }

    public Student createStudent(Student student) {

        logger.info("Creating student with email: {}", student.getEmail());

        return studentRepository.save(student);
    }

    public Student updateStudent(Long id, Student student) {

        logger.info("Updating student with id: {}", id);

        Student existing = getStudentById(id);

        existing.setName(student.getName());
        existing.setEmail(student.getEmail());
        existing.setCourse(student.getCourse());
        existing.setAge(student.getAge());

        return studentRepository.save(existing);
    }

    public Student patchStudent(Long id, Student student) {

        logger.info("Partially updating student with id: {}", id);

        Student existing = getStudentById(id);

        if (student.getName() != null) {
            existing.setName(student.getName());
        }

        if (student.getEmail() != null) {
            existing.setEmail(student.getEmail());
        }

        if (student.getCourse() != null) {
            existing.setCourse(student.getCourse());
        }

        if (student.getAge() > 0) {
            existing.setAge(student.getAge());
        }

        return studentRepository.save(existing);
    }

    public void deleteStudent(Long id) {

        logger.info("Deleting student with id: {}", id);

        if (!studentRepository.existsById(id)) {
            logger.warn("Cannot delete. Student not found with id: {}", id);

            throw new RuntimeException(
                    "Student not found with id: " + id
            );
        }

        studentRepository.deleteById(id);
    }

    public Student getStudentByEmail(String email) {

        logger.info("Fetching student with email: {}", email);

        return studentRepository.findByEmail(email)
                .orElseThrow(() ->
                        new RuntimeException(
                                "Student not found with email: " + email
                        ));
    }
}