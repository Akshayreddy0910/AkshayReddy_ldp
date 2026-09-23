package com.example.hibernate_advanced_mappings.service;

import com.example.hibernate_advanced_mappings.entity.Course;
import com.example.hibernate_advanced_mappings.entity.Department;
import com.example.hibernate_advanced_mappings.entity.Student;
import com.example.hibernate_advanced_mappings.entity.StudentProfile;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class StudentService {

    @PersistenceContext
    private EntityManager entityManager;

    @Transactional
    public Student createStudent() {

        StudentProfile profile = new StudentProfile(
                "9876543210",
                "Anantapur"
        );

        Student student = new Student(
                "Akshay",
                "akshay@example.com",
                profile
        );

        profile.setStudent(student);

        entityManager.persist(student);

        return student;
    }

    @Transactional
    public Department createDepartment() {

        Department department =
                new Department("Computer Science");

        Student student1 = new Student(
                "Rahul",
                "rahul@example.com",
                new StudentProfile(
                        "9000000001",
                        "Anantapur"
                )
        );

        Student student2 = new Student(
                "Priya",
                "priya@example.com",
                new StudentProfile(
                        "9000000002",
                        "Bangalore"
                )
        );

        department.addStudent(student1);
        department.addStudent(student2);

        entityManager.persist(department);

        return department;
    }

    @Transactional
    public Student createManyToMany() {

        Student rahul = new Student(
                "Rahul",
                "rahul@example.com",
                new StudentProfile(
                        "9000000003",
                        "Anantapur"
                )
        );

        Student priya = new Student(
                "Priya",
                "priya@example.com",
                new StudentProfile(
                        "9000000004",
                        "Bangalore"
                )
        );

        Course java = new Course("Java");
        Course hibernate = new Course("Hibernate");
        Course spring = new Course("Spring");

        rahul.addCourse(java);
        rahul.addCourse(hibernate);

        priya.addCourse(java);
        priya.addCourse(spring);

        entityManager.persist(rahul);
        entityManager.persist(priya);

        return rahul;
    }

    @Transactional
    public String testOrphanRemoval(Long departmentId) {

        Department department =
                entityManager.find(Department.class, departmentId);

        if (department == null) {
            return "Department not found";
        }

        if (department.getStudents().isEmpty()) {
            return "No students found";
        }

        Student student = department.getStudents().get(0);

        department.removeStudent(student);

        return "Student removed from department";
    }

    @Transactional(readOnly = true)
    public Student getStudent(Long id) {
        return entityManager.find(Student.class, id);
    }
}