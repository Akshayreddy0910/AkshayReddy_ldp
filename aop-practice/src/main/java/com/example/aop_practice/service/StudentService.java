package com.example.aop_practice.service;

import org.springframework.stereotype.Service;

@Service
public class StudentService {

    public String getStudent() {
        System.out.println("Executing getStudent()");
        return "Student details";
    }

    public String saveStudent() {
        System.out.println("Executing saveStudent()");
        return "Student saved";
    }

    public String errorTest() {
        System.out.println("Executing errorTest()");
        throw new RuntimeException("Student not found");
    }
}