package com.example.student_service.service;

import com.example.student_service.dto.CourseResponse;
import com.example.student_service.model.Student;
import com.example.student_service.repository.StudentRepository;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestClient;

import java.util.List;

@Service
public class StudentService {

    private final StudentRepository studentRepository;
    private final RestClient restClient;

    public StudentService(
            StudentRepository studentRepository,
            RestClient restClient) {

        this.studentRepository = studentRepository;
        this.restClient = restClient;
    }

    public List<Student> getAllStudents() {
        return studentRepository.findAll();
    }

    public Student getStudentById(Long id) {
        return studentRepository.findById(id).orElse(null);
    }

    public Student createStudent(Student student) {
        return studentRepository.save(student);
    }

    public CourseResponse getCourse(Long courseId) {

        return restClient.get()
                .uri("http://localhost:8081/courses/" + courseId)
                .retrieve()
                .body(CourseResponse.class);
    }
}