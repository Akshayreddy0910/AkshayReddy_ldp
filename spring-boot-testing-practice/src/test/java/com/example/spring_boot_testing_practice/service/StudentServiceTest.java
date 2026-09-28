package com.example.spring_boot_testing_practice.service;

import com.example.spring_boot_testing_practice.model.Student;
import com.example.spring_boot_testing_practice.repository.StudentRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class StudentServiceTest {

    @Mock
    private StudentRepository studentRepository;

    @InjectMocks
    private StudentService studentService;

    private Student student;

    @BeforeEach
    void setUp() {
        student = new Student(
                1L,
                "Akshay",
                "akshay@gmail.com",
                "Spring Boot",
                21
        );
    }

    @Test
    void shouldGetAllStudents() {

        when(studentRepository.findAll())
                .thenReturn(List.of(student));

        List<Student> result =
                studentService.getAllStudents();

        assertEquals(1, result.size());
        assertEquals("Akshay", result.get(0).getName());

        verify(studentRepository).findAll();
    }

    @Test
    void shouldGetStudentById() {

        when(studentRepository.findById(1L))
                .thenReturn(Optional.of(student));

        Student result =
                studentService.getStudentById(1L);

        assertEquals("Akshay", result.getName());

        verify(studentRepository).findById(1L);
    }

    @Test
    void shouldCreateStudent() {

        when(studentRepository.save(student))
                .thenReturn(student);

        Student result =
                studentService.createStudent(student);

        assertEquals("Akshay", result.getName());

        verify(studentRepository).save(student);
    }

    @Test
    void shouldDeleteStudent() {

        when(studentRepository.existsById(1L))
                .thenReturn(true);

        studentService.deleteStudent(1L);

        verify(studentRepository).existsById(1L);
        verify(studentRepository).deleteById(1L);
    }

    @Test
    void shouldThrowExceptionWhenStudentNotFound() {

        when(studentRepository.findById(999L))
                .thenReturn(Optional.empty());

        RuntimeException exception =
                assertThrows(
                        RuntimeException.class,
                        () -> studentService.getStudentById(999L)
                );

        assertEquals(
                "Student not found with id: 999",
                exception.getMessage()
        );
    }
}