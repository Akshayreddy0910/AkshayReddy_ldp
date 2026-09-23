package com.example.hibernate_advanced_mappings.controller;

import com.example.hibernate_advanced_mappings.entity.Department;
import com.example.hibernate_advanced_mappings.entity.Student;
import com.example.hibernate_advanced_mappings.service.StudentService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/students")
public class StudentController {

    private final StudentService studentService;

    public StudentController(StudentService studentService) {
        this.studentService = studentService;
    }

    @PostMapping
    public Student createStudent() {
        return studentService.createStudent();
    }

    @GetMapping("/{id}")
    public Student getStudent(@PathVariable Long id) {
        return studentService.getStudent(id);
    }

    @PostMapping("/department")
    public Department createDepartment() {
        return studentService.createDepartment();
    }

    @PostMapping("/courses")
    public Student createManyToMany() {
        return studentService.createManyToMany();
    }

    @DeleteMapping("/department/{departmentId}/orphan")
    public String testOrphanRemoval(
            @PathVariable Long departmentId) {

        return studentService.testOrphanRemoval(departmentId);
    }
}