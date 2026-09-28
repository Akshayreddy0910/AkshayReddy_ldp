package com.example.spring_boot_testing_practice.repository;

import com.example.spring_boot_testing_practice.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface StudentRepository extends JpaRepository<Student, Long> {

    Optional<Student> findByEmail(String email);
}