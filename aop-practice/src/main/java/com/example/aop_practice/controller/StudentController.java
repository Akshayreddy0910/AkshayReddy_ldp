package com.example.aop_practice.controller;

import com.example.aop_practice.service.StudentService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class StudentController {

    private final StudentService studentService;

    public StudentController(StudentService studentService) {
        this.studentService = studentService;
    }

    @GetMapping("/student")
    public String getStudent() {
        return studentService.getStudent();
    }

    @GetMapping("/student/save")
    public String saveStudent() {
        return studentService.saveStudent();
    }

    @GetMapping("/student/error")
    public String errorTest() {
        return studentService.errorTest();
    }
}