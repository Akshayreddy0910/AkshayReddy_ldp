package com.example.spring_boot_assignment.service;

import com.example.spring_boot_assignment.model.Book;
import com.example.spring_boot_assignment.repository.BookRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class BookServiceTest {

    @Mock
    private BookRepository bookRepository;

    @InjectMocks
    private BookService bookService;

    private Book book;

    @BeforeEach
    void setUp() {
        book = new Book(1L, "Spring Boot", "James", 500);
    }

    @Test
    void shouldGetAllBooks() {
        when(bookRepository.findAll()).thenReturn(List.of(book));

        List<Book> result = bookService.getAllBooks();

        assertEquals(1, result.size());
        assertEquals("Spring Boot", result.get(0).getTitle());
        verify(bookRepository).findAll();
    }

    @Test
    void shouldGetBookById() {
        when(bookRepository.findById(1L))
                .thenReturn(Optional.of(book));

        Book result = bookService.getBookById(1L);

        assertNotNull(result);
        assertEquals("Spring Boot", result.getTitle());
        verify(bookRepository).findById(1L);
    }

    @Test
    void shouldReturnNullWhenBookNotFound() {
        when(bookRepository.findById(999L))
                .thenReturn(Optional.empty());

        Book result = bookService.getBookById(999L);

        assertNull(result);
        verify(bookRepository).findById(999L);
    }

    @Test
    void shouldCreateBook() {
        when(bookRepository.save(book))
                .thenReturn(book);

        Book result = bookService.createBook(book);

        assertNotNull(result);
        assertEquals("Spring Boot", result.getTitle());
        verify(bookRepository).save(book);
    }

    @Test
    void shouldUpdateBook() {
        Book updatedBook =
                new Book(1L, "Advanced Spring Boot", "John", 700);

        when(bookRepository.findById(1L))
                .thenReturn(Optional.of(book));

        when(bookRepository.save(book))
                .thenReturn(book);

        Book result =
                bookService.updateBook(1L, updatedBook);

        assertNotNull(result);
        assertEquals("Advanced Spring Boot", result.getTitle());
        assertEquals("John", result.getAuthor());
        assertEquals(700, result.getPrice());

        verify(bookRepository).findById(1L);
        verify(bookRepository).save(book);
    }

    @Test
    void shouldReturnNullWhenUpdatingNonExistingBook() {
        Book updatedBook =
                new Book(999L, "Unknown", "Unknown", 700);

        when(bookRepository.findById(999L))
                .thenReturn(Optional.empty());

        Book result =
                bookService.updateBook(999L, updatedBook);

        assertNull(result);

        verify(bookRepository).findById(999L);
        verify(bookRepository, never())
                .save(any(Book.class));
    }

    @Test
    void shouldDeleteBook() {
        when(bookRepository.existsById(1L))
                .thenReturn(true);

        boolean result =
                bookService.deleteBook(1L);

        assertTrue(result);

        verify(bookRepository).existsById(1L);
        verify(bookRepository).deleteById(1L);
    }

    @Test
    void shouldReturnFalseWhenDeletingNonExistingBook() {
        when(bookRepository.existsById(999L))
                .thenReturn(false);

        boolean result =
                bookService.deleteBook(999L);

        assertFalse(result);

        verify(bookRepository).existsById(999L);
        verify(bookRepository, never())
                .deleteById(999L);
    }
}