package com.example.spring_boot_assignment.service;

import com.example.spring_boot_assignment.model.Book;
import com.example.spring_boot_assignment.repository.BookRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookService {

    private final BookRepository bookRepository;

    public BookService(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public List<Book> getAllBooks() {
        return bookRepository.findAll();
    }

    public Book getBookById(Long id) {
        return bookRepository.findById(id).orElse(null);
    }

    public Book createBook(Book book) {
        return bookRepository.save(book);
    }

    public Book updateBook(Long id, Book book) {

        Book existing = getBookById(id);

        if (existing == null) {
            return null;
        }

        existing.setTitle(book.getTitle());
        existing.setAuthor(book.getAuthor());
        existing.setPrice(book.getPrice());

        return bookRepository.save(existing);
    }

    public boolean deleteBook(Long id) {

        if (!bookRepository.existsById(id)) {
            return false;
        }

        bookRepository.deleteById(id);
        return true;
    }
}