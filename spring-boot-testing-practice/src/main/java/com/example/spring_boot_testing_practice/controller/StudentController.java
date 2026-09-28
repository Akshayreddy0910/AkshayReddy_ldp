package com.example.spring_boot_testing_practice.controller;

import com.example.spring_boot_testing_practice.model.Student;
import com.example.spring_boot_testing_practice.service.StudentService;
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
        return ResponseEntity.ok(studentService.getAllStudents());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Student> getStudentById(
            @PathVariable Long id) {

        return ResponseEntity.ok(
                studentService.getStudentById(id)
        );
    }

    @GetMapping("/email/{email}")
    public ResponseEntity<Student> getStudentByEmail(
            @PathVariable String email) {

        return ResponseEntity.ok(
                studentService.getStudentByEmail(email)
        );
    }

    @PostMapping
    public ResponseEntity<Student> createStudent(
            @Valid @RequestBody Student student) {

        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(studentService.createStudent(student));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Student> updateStudent(
            @PathVariable Long id,
            @Valid @RequestBody Student student) {

        return ResponseEntity.ok(
                studentService.updateStudent(id, student)
        );
    }

    @PatchMapping("/{id}")
    public ResponseEntity<Student> patchStudent(
            @PathVariable Long id,
            @RequestBody Student student) {

        return ResponseEntity.ok(
                studentService.patchStudent(id, student)
        );
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteStudent(
            @PathVariable Long id) {

        studentService.deleteStudent(id);

        return ResponseEntity.noContent().build();
    }
}