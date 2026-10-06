package com.example.spring_boot_assignment.model;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class BookTest {

    @Test
    void shouldCreateBookUsingConstructor() {

        Book book =
                new Book(
                        1L,
                        "Spring Boot",
                        "James",
                        500
                );

        assertEquals(1L, book.getId());
        assertEquals("Spring Boot", book.getTitle());
        assertEquals("James", book.getAuthor());
        assertEquals(500, book.getPrice());
    }

    @Test
    void shouldSetAndGetBookFields() {

        Book book = new Book();

        book.setId(1L);
        book.setTitle("Spring Boot");
        book.setAuthor("James");
        book.setPrice(500);

        assertEquals(1L, book.getId());
        assertEquals("Spring Boot", book.getTitle());
        assertEquals("James", book.getAuthor());
        assertEquals(500, book.getPrice());
    }
}