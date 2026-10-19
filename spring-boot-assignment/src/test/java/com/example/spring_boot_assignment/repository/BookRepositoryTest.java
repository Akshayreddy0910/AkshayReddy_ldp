package com.example.spring_boot_assignment.repository;

import com.example.spring_boot_assignment.model.Book;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.data.jpa.test.autoconfigure.DataJpaTest;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;

@DataJpaTest
class BookRepositoryTest {

    @Autowired
    private BookRepository bookRepository;

    @Test
    void shouldSaveBook() {

        Book book =
                new Book(
                        null,
                        "Spring Boot",
                        "James",
                        500
                );

        Book savedBook =
                bookRepository.save(book);

        assertNotNull(savedBook.getId());
        assertEquals(
                "Spring Boot",
                savedBook.getTitle()
        );
    }

    @Test
    void shouldFindBookById() {

        Book book =
                new Book(
                        null,
                        "Spring Boot",
                        "James",
                        500
                );

        Book savedBook =
                bookRepository.save(book);

        Optional<Book> result =
                bookRepository.findById(
                        savedBook.getId()
                );

        assertTrue(result.isPresent());
        assertEquals(
                "Spring Boot",
                result.get().getTitle()
        );
    }

    @Test
    void shouldFindAllBooks() {

        Book book =
                new Book(
                        null,
                        "Spring Boot",
                        "James",
                        500
                );

        bookRepository.save(book);

        assertFalse(
                bookRepository.findAll().isEmpty()
        );
    }

    @Test
    void shouldDeleteBook() {

        Book book =
                new Book(
                        null,
                        "Spring Boot",
                        "James",
                        500
                );

        Book savedBook =
                bookRepository.save(book);

        bookRepository.deleteById(
                savedBook.getId()
        );

        Optional<Book> result =
                bookRepository.findById(
                        savedBook.getId()
                );

        assertFalse(result.isPresent());
    }
}