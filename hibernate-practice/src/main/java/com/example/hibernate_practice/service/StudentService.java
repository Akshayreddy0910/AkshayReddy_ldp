package com.example.hibernate_practice.service;

import com.example.hibernate_practice.entity.Student;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class StudentService {

    @PersistenceContext
    private EntityManager entityManager;

    // CREATE
    @Transactional
    public Student createStudent(Student student) {
        entityManager.persist(student);
        return student;
    }

    // READ
    @Transactional
    public Student getStudent(Long id) {
        return entityManager.find(Student.class, id);
    }

    // UPDATE
    @Transactional
    public Student updateStudent(Long id, Student student) {

        Student existingStudent = entityManager.find(Student.class, id);

        if (existingStudent == null) {
            return null;
        }

        existingStudent.setName(student.getName());
        existingStudent.setEmail(student.getEmail());

        return entityManager.merge(existingStudent);
    }

    // DELETE
    @Transactional
    public boolean deleteStudent(Long id) {

        Student student = entityManager.find(Student.class, id);

        if (student == null) {
            return false;
        }

        entityManager.remove(student);
        return true;
    }

    // PERSISTENCE CONTEXT TEST
    @Transactional
    public String testPersistenceContext(Long id) {

        Student firstStudent = entityManager.find(Student.class, id);
        Student secondStudent = entityManager.find(Student.class, id);

        return "Are both objects the same? "
                + (firstStudent == secondStudent);
    }

    // DIRTY CHECKING TEST
    @Transactional
    public String testDirtyChecking(Long id) {

        Student student = entityManager.find(Student.class, id);

        if (student == null) {
            return "Student not found";
        }

        student.setName("Dirty Checking Test");

        return "Student name changed successfully";
    }

    // ENTITY LIFECYCLE TEST
    @Transactional
    public String testEntityLifecycle() {

        Student student = new Student(
                "Lifecycle Test",
                "lifecycle@example.com"
        );

        entityManager.persist(student);

        Long id = student.getId();

        entityManager.detach(student);

        Student managedStudent = entityManager.merge(student);
        entityManager.remove(managedStudent);

        return "Lifecycle tested for student ID: " + id;
    }

    // TRANSACTION ROLLBACK TEST
    @Transactional
    public void testTransactionRollback() {

        Student student = new Student(
                "Rollback Test",
                "rollback@example.com"
        );

        entityManager.persist(student);

        throw new RuntimeException(
                "Intentional exception to test transaction rollback"
        );
    }

    // JPQL TEST
    @Transactional
    public List<Student> findStudentsByName(String name) {

        return entityManager.createQuery(
                        "SELECT s FROM Student s WHERE s.name = :name",
                        Student.class
                ).setParameter("name", name)
                .getResultList();
    }

    // FLUSH AND CLEAR TEST
    @Transactional
    public String testFlushAndClear(Long id) {

        Student student = entityManager.find(Student.class, id);

        if (student == null) {
            return "Student not found";
        }

        student.setName("Flush Test");

        entityManager.flush();

        entityManager.clear();

        Student newStudentReference =
                entityManager.find(Student.class, id);

        return "After clear, same object reference? "
                + (student == newStudentReference);
    }
}