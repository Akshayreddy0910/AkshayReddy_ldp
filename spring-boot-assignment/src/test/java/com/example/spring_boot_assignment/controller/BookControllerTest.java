package com.example.spring_boot_assignment.controller;

import com.example.spring_boot_assignment.model.Book;
import com.example.spring_boot_assignment.service.BookService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.webmvc.test.autoconfigure.WebMvcTest;
import org.springframework.test.context.bean.override.mockito.MockitoBean;
import org.springframework.test.web.servlet.MockMvc;
import tools.jackson.databind.ObjectMapper;

import java.util.List;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.eq;
import static org.mockito.Mockito.*;
import static org.springframework.http.MediaType.APPLICATION_JSON;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@WebMvcTest(BookController.class)
class BookControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockitoBean
    private BookService bookService;

    @Autowired
    private ObjectMapper objectMapper;

    @Test
    void shouldGetAllBooks() throws Exception {

        Book book =
                new Book(1L, "Spring Boot", "James", 500);

        when(bookService.getAllBooks())
                .thenReturn(List.of(book));

        mockMvc.perform(get("/books"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$[0].title")
                        .value("Spring Boot"));

        verify(bookService).getAllBooks();
    }

    @Test
    void shouldGetBookById() throws Exception {

        Book book =
                new Book(1L, "Spring Boot", "James", 500);

        when(bookService.getBookById(1L))
                .thenReturn(book);

        mockMvc.perform(get("/books/1"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.title")
                        .value("Spring Boot"));

        verify(bookService).getBookById(1L);
    }

    @Test
    void shouldReturnNotFoundWhenBookDoesNotExist()
            throws Exception {

        when(bookService.getBookById(999L))
                .thenReturn(null);

        mockMvc.perform(get("/books/999"))
                .andExpect(status().isNotFound());

        verify(bookService).getBookById(999L);
    }

    @Test
    void shouldCreateBook() throws Exception {

        Book book =
                new Book(1L, "Spring Boot", "James", 500);

        when(bookService.createBook(any(Book.class)))
                .thenReturn(book);

        mockMvc.perform(
                        post("/books")
                                .contentType(APPLICATION_JSON)
                                .content(
                                        objectMapper
                                                .writeValueAsString(book)
                                )
                )
                .andExpect(status().isCreated())
                .andExpect(jsonPath("$.title")
                        .value("Spring Boot"));

        verify(bookService)
                .createBook(any(Book.class));
    }

    @Test
    void shouldUpdateBook() throws Exception {

        Book book =
                new Book(
                        1L,
                        "Advanced Spring Boot",
                        "John",
                        700
                );

        when(bookService.updateBook(
                eq(1L),
                any(Book.class)))
                .thenReturn(book);

        mockMvc.perform(
                        put("/books/1")
                                .contentType(APPLICATION_JSON)
                                .content(
                                        objectMapper
                                                .writeValueAsString(book)
                                )
                )
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.title")
                        .value("Advanced Spring Boot"));

        verify(bookService)
                .updateBook(eq(1L), any(Book.class));
    }

    @Test
    void shouldReturnNotFoundWhenUpdatingBook()
            throws Exception {

        Book book =
                new Book(
                        999L,
                        "Unknown",
                        "Unknown",
                        700
                );

        when(bookService.updateBook(
                eq(999L),
                any(Book.class)))
                .thenReturn(null);

        mockMvc.perform(
                        put("/books/999")
                                .contentType(APPLICATION_JSON)
                                .content(
                                        objectMapper
                                                .writeValueAsString(book)
                                )
                )
                .andExpect(status().isNotFound());

        verify(bookService)
                .updateBook(eq(999L), any(Book.class));
    }

    @Test
    void shouldDeleteBook() throws Exception {

        when(bookService.deleteBook(1L))
                .thenReturn(true);

        mockMvc.perform(delete("/books/1"))
                .andExpect(status().isOk())
                .andExpect(content()
                        .string("Book deleted successfully"));

        verify(bookService).deleteBook(1L);
    }

    @Test
    void shouldReturnNotFoundWhenDeletingBook()
            throws Exception {

        when(bookService.deleteBook(999L))
                .thenReturn(false);

        mockMvc.perform(delete("/books/999"))
                .andExpect(status().isNotFound());

        verify(bookService).deleteBook(999L);
    }
}