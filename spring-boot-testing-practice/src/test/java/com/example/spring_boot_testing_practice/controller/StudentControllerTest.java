package com.example.spring_boot_testing_practice.controller;

import com.example.spring_boot_testing_practice.model.Student;
import com.example.spring_boot_testing_practice.service.StudentService;

import org.junit.jupiter.api.Test;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.webmvc.test.autoconfigure.WebMvcTest;
import org.springframework.test.context.bean.override.mockito.MockitoBean;
import org.springframework.test.web.servlet.MockMvc;

import java.util.List;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.eq;
import static org.mockito.Mockito.doNothing;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.delete;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.patch;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.put;

import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(StudentController.class)
class StudentControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockitoBean
    private StudentService studentService;

    @Test
    void shouldGetAllStudents() throws Exception {

        Student student = new Student(
                1L,
                "Akshay",
                "akshay@gmail.com",
                "Spring Boot",
                21
        );

        when(studentService.getAllStudents())
                .thenReturn(List.of(student));

        mockMvc.perform(get("/students"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$[0].name")
                        .value("Akshay"))
                .andExpect(jsonPath("$[0].email")
                        .value("akshay@gmail.com"));

        verify(studentService, times(1))
                .getAllStudents();
    }

    @Test
    void shouldGetStudentById() throws Exception {

        Student student = new Student(
                1L,
                "Akshay",
                "akshay@gmail.com",
                "Spring Boot",
                21
        );

        when(studentService.getStudentById(1L))
                .thenReturn(student);

        mockMvc.perform(get("/students/1"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.name")
                        .value("Akshay"))
                .andExpect(jsonPath("$.course")
                        .value("Spring Boot"));

        verify(studentService)
                .getStudentById(1L);
    }

    @Test
    void shouldCreateStudent() throws Exception {

        Student student = new Student(
                1L,
                "Akshay",
                "akshay@gmail.com",
                "Spring Boot",
                21
        );

        when(studentService.createStudent(any(Student.class)))
                .thenReturn(student);

        String json = """
                {
                    "name": "Akshay",
                    "email": "akshay@gmail.com",
                    "course": "Spring Boot",
                    "age": 21
                }
                """;

        mockMvc.perform(
                        post("/students")
                                .contentType("application/json")
                                .content(json)
                )
                .andExpect(status().isCreated())
                .andExpect(jsonPath("$.name")
                        .value("Akshay"))
                .andExpect(jsonPath("$.age")
                        .value(21));

        verify(studentService)
                .createStudent(any(Student.class));
    }

    @Test
    void shouldDeleteStudent() throws Exception {

        doNothing()
                .when(studentService)
                .deleteStudent(1L);

        mockMvc.perform(delete("/students/1"))
                .andExpect(status().isNoContent());

        verify(studentService)
                .deleteStudent(1L);
    }

    @Test
    void shouldUpdateStudent() throws Exception {

        Student student = new Student(
                1L,
                "Akshay Updated",
                "updated@gmail.com",
                "Java",
                22
        );

        when(studentService.updateStudent(
                eq(1L),
                any(Student.class)
        )).thenReturn(student);

        String json = """
                {
                    "name": "Akshay Updated",
                    "email": "updated@gmail.com",
                    "course": "Java",
                    "age": 22
                }
                """;

        mockMvc.perform(
                        put("/students/1")
                                .contentType("application/json")
                                .content(json)
                )
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.name")
                        .value("Akshay Updated"));

        verify(studentService)
                .updateStudent(eq(1L), any(Student.class));
    }

    @Test
    void shouldPatchStudent() throws Exception {

        Student student = new Student(
                1L,
                "Akshay",
                "akshay@gmail.com",
                "Spring Boot",
                22
        );

        when(studentService.patchStudent(
                eq(1L),
                any(Student.class)
        )).thenReturn(student);

        String json = """
                {
                    "age": 22
                }
                """;

        mockMvc.perform(
                        patch("/students/1")
                                .contentType("application/json")
                                .content(json)
                )
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.age")
                        .value(22));

        verify(studentService)
                .patchStudent(eq(1L), any(Student.class));
    }
}