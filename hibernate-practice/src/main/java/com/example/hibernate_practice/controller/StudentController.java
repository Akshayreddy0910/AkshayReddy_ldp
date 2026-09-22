package com.example.hibernate_practice.controller;

import com.example.hibernate_practice.entity.Student;
import com.example.hibernate_practice.service.StudentService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/students")
public class StudentController {

    private final StudentService studentService;

    public StudentController(StudentService studentService) {
        this.studentService = studentService;
    }

    // CREATE
    @PostMapping
    public Student createStudent(@RequestBody Student student) {
        return studentService.createStudent(student);
    }

    // READ
    @GetMapping("/{id}")
    public Student getStudent(@PathVariable Long id) {
        return studentService.getStudent(id);
    }

    // UPDATE
    @PutMapping("/{id}")
    public Student updateStudent(
            @PathVariable Long id,
            @RequestBody Student student) {

        return studentService.updateStudent(id, student);
    }

    // DELETE
    @DeleteMapping("/{id}")
    public String deleteStudent(@PathVariable Long id) {

        boolean deleted = studentService.deleteStudent(id);

        if (!deleted) {
            return "Student not found";
        }

        return "Student deleted successfully";
    }

    // PERSISTENCE CONTEXT TEST
    @GetMapping("/persistence-context/{id}")
    public String testPersistenceContext(@PathVariable Long id) {
        return studentService.testPersistenceContext(id);
    }

    // DIRTY CHECKING TEST
    @PutMapping("/dirty-checking/{id}")
    public String testDirtyChecking(@PathVariable Long id) {
        return studentService.testDirtyChecking(id);
    }

    // ENTITY LIFECYCLE TEST
    @GetMapping("/lifecycle")
    public String testEntityLifecycle() {
        return studentService.testEntityLifecycle();
    }

    // TRANSACTION ROLLBACK TEST
    @PostMapping("/transaction-rollback")
    public String testTransactionRollback() {

        studentService.testTransactionRollback();

        return "Transaction completed";
    }

    // JPQL TEST
    @GetMapping("/search")
    public List<Student> findStudentsByName(
            @RequestParam String name) {

        return studentService.findStudentsByName(name);
    }

    // FLUSH AND CLEAR TEST
    @PutMapping("/flush-clear/{id}")
    public String testFlushAndClear(@PathVariable Long id) {
        return studentService.testFlushAndClear(id);
    }
}