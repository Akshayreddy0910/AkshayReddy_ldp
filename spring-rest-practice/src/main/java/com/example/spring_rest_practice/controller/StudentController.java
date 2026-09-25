package com.example.spring_rest_practice.controller;

import com.example.spring_rest_practice.dto.StudentRequest;
import com.example.spring_rest_practice.exception.StudentNotFoundException;
import com.example.spring_rest_practice.model.Student;
import com.example.spring_rest_practice.service.StudentService;

import jakarta.validation.Valid;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/students")
public class StudentController {

    private final StudentService studentService;

    public StudentController(StudentService studentService) {
        this.studentService = studentService;
    }

    @GetMapping
    public ResponseEntity<List<Student>> getAllStudents() {

        return ResponseEntity.ok(
                studentService.getAllStudents()
        );
    }

    @GetMapping("/{id}")
    public ResponseEntity<Student> getStudentById(
            @PathVariable Long id) {

        Student student = studentService.getStudentById(id);

        if (student == null) {
            throw new StudentNotFoundException(id);
        }

        return ResponseEntity.ok(student);
    }

    @GetMapping("/search")
    public ResponseEntity<List<Student>> searchStudents(
            @RequestParam(required = false) String name) {

        return ResponseEntity.ok(
                studentService.searchStudents(name)
        );
    }

    @PostMapping
    public ResponseEntity<Student> createStudent(
            @Valid @RequestBody StudentRequest request) {

        Student student =
                studentService.createStudent(request);

        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(student);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Student> updateStudent(
            @PathVariable Long id,
            @Valid @RequestBody StudentRequest request) {

        Student student =
                studentService.updateStudent(id, request);

        if (student == null) {
            throw new StudentNotFoundException(id);
        }

        return ResponseEntity.ok(student);
    }

    @PatchMapping("/{id}")
    public ResponseEntity<Student> patchStudent(
            @PathVariable Long id,
            @RequestBody StudentRequest request) {

        Student student =
                studentService.patchStudent(id, request);

        if (student == null) {
            throw new StudentNotFoundException(id);
        }

        return ResponseEntity.ok(student);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteStudent(
            @PathVariable Long id) {

        boolean deleted =
                studentService.deleteStudent(id);

        if (!deleted) {
            throw new StudentNotFoundException(id);
        }

        return ResponseEntity.noContent().build();
    }
}