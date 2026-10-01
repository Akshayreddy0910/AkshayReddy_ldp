package com.example.spring_rest_practice.service;

import com.example.spring_rest_practice.dto.StudentRequest;
import com.example.spring_rest_practice.model.Student;
import com.example.spring_rest_practice.repository.StudentRepository;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentService {

    private final StudentRepository studentRepository;

    public StudentService(StudentRepository studentRepository) {
        this.studentRepository = studentRepository;
    }

    public List<Student> getAllStudents() {
        return studentRepository.findAll();
    }

    public Student getStudentById(Long id) {
        return studentRepository.findById(id).orElse(null);
    }

    public Student createStudent(StudentRequest request) {

        Student student = new Student();

        student.setName(request.getName());
        student.setEmail(request.getEmail());
        student.setCourse(request.getCourse());
        student.setAge(request.getAge());

        return studentRepository.save(student);
    }

    public Student updateStudent(
            Long id,
            StudentRequest request) {

        Student student = getStudentById(id);

        if (student == null) {
            return null;
        }

        student.setName(request.getName());
        student.setEmail(request.getEmail());
        student.setCourse(request.getCourse());
        student.setAge(request.getAge());

        return studentRepository.save(student);
    }

    public Student patchStudent(
            Long id,
            StudentRequest request) {

        Student student = getStudentById(id);

        if (student == null) {
            return null;
        }

        if (request.getName() != null) {
            student.setName(request.getName());
        }

        if (request.getEmail() != null) {
            student.setEmail(request.getEmail());
        }

        if (request.getCourse() != null) {
            student.setCourse(request.getCourse());
        }

        if (request.getAge() != null) {
            student.setAge(request.getAge());
        }

        return studentRepository.save(student);
    }

    public boolean deleteStudent(Long id) {

        if (!studentRepository.existsById(id)) {
            return false;
        }

        studentRepository.deleteById(id);

        return true;
    }

    public List<Student> searchStudents(String name) {

        if (name == null || name.isBlank()) {
            return studentRepository.findAll();
        }

        return studentRepository
                .findByNameContainingIgnoreCase(name);
    }
}