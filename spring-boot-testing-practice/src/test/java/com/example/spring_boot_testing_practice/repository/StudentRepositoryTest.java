package com.example.spring_boot_testing_practice.repository;

import com.example.spring_boot_testing_practice.model.Student;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.data.jpa.test.autoconfigure.DataJpaTest;

import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;
import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;

@DataJpaTest
class StudentRepositoryTest {

    @Autowired
    private StudentRepository studentRepository;

    @Test
    void shouldSaveStudent() {

        Student student = new Student(
                null,
                "Akshay",
                "akshay@gmail.com",
                "Spring Boot",
                21
        );

        Student savedStudent = studentRepository.save(student);

        assertThat(savedStudent.getId()).isNotNull();
        assertThat(savedStudent.getName()).isEqualTo("Akshay");
    }

    @Test
    void shouldFindAllStudents() {

        Student student1 = new Student(
                null,
                "Akshay",
                "akshay@gmail.com",
                "Spring Boot",
                21
        );

        Student student2 = new Student(
                null,
                "Rahul",
                "rahul@gmail.com",
                "Java",
                22
        );

        studentRepository.save(student1);
        studentRepository.save(student2);

        List<Student> students = studentRepository.findAll();

        assertThat(students).hasSize(2);
    }
}