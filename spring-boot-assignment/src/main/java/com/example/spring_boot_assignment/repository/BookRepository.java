package com.example.spring_boot_assignment.repository;

import com.example.spring_boot_assignment.model.Book;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookRepository extends JpaRepository<Book, Long> {
}