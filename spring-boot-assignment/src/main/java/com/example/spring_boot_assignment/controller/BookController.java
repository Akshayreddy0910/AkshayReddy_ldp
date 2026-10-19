package com.example.spring_boot_assignment.controller;

import com.example.spring_boot_assignment.model.Book;
import com.example.spring_boot_assignment.service.BookService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/books")
public class BookController {

    private final BookService bookService;

    public BookController(BookService bookService) {
        this.bookService = bookService;
    }

    @GetMapping
    public ResponseEntity<List<Book>> getAllBooks() {
        return ResponseEntity.ok(bookService.getAllBooks());
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getBookById(@PathVariable Long id) {

        Book book = bookService.getBookById(id);

        if (book == null) {
            return ResponseEntity
                    .status(HttpStatus.NOT_FOUND)
                    .body("Book not found");
        }

        return ResponseEntity.ok(book);
    }

    @PostMapping
    public ResponseEntity<Book> createBook(
            @Valid @RequestBody Book book) {

        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(bookService.createBook(book));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Book> updateBook(
            @PathVariable Long id,
            @Valid @RequestBody Book book) {

        Book updated = bookService.updateBook(id, book);

        if (updated == null) {
            return ResponseEntity.notFound().build();
        }

        return ResponseEntity.ok(updated);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteBook(@PathVariable Long id) {

        boolean deleted = bookService.deleteBook(id);

        if (!deleted) {
            return ResponseEntity.notFound().build();
        }

        return ResponseEntity.ok("Book deleted successfully");
    }
}