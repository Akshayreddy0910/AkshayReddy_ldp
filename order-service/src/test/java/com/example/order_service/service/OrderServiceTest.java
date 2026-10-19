package com.example.order_service.service;

import com.example.order_service.dto.BookResponse;
import com.example.order_service.model.Order;
import com.example.order_service.repository.OrderRepository;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Answers;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.web.client.RestClient;

import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class OrderServiceTest {

    @Mock
    private OrderRepository orderRepository;

    @Mock(answer = Answers.RETURNS_DEEP_STUBS)
    private RestClient restClient;

    @InjectMocks
    private OrderService orderService;

    @Test
    void shouldGetAllOrders() {
        List<Order> orders = List.of(
                new Order(1L, 1L, 2),
                new Order(2L, 2L, 3)
        );

        when(orderRepository.findAll()).thenReturn(orders);

        List<Order> result = orderService.getAllOrders();

        assertEquals(2, result.size());
        verify(orderRepository).findAll();
    }

    @Test
    void shouldGetOrderById() {
        Order order = new Order(1L, 1L, 2);

        when(orderRepository.findById(1L))
                .thenReturn(Optional.of(order));

        Order result = orderService.getOrderById(1L);

        assertNotNull(result);
        assertEquals(1L, result.getId());
        verify(orderRepository).findById(1L);
    }

    @Test
    void shouldReturnNullWhenOrderDoesNotExist() {
        when(orderRepository.findById(999L))
                .thenReturn(Optional.empty());

        Order result = orderService.getOrderById(999L);

        assertNull(result);
    }

    @Test
    void shouldCreateOrder() {
        Order order = new Order(null, 1L, 2);
        Order saved = new Order(1L, 1L, 2);

        when(orderRepository.save(order))
                .thenReturn(saved);

        Order result = orderService.createOrder(order);

        assertEquals(1L, result.getId());
        verify(orderRepository).save(order);
    }

    @Test
    void shouldUpdateOrder() {
        Order existing = new Order(1L, 1L, 2);
        Order updated = new Order(null, 2L, 5);

        when(orderRepository.findById(1L))
                .thenReturn(Optional.of(existing));

        when(orderRepository.save(existing))
                .thenReturn(existing);

        Order result =
                orderService.updateOrder(1L, updated);

        assertEquals(2L, result.getBookId());
        assertEquals(5, result.getQuantity());

        verify(orderRepository).save(existing);
    }

    @Test
    void shouldReturnNullWhenUpdatingNonExistingOrder() {
        Order updated = new Order(null, 2L, 5);

        when(orderRepository.findById(999L))
                .thenReturn(Optional.empty());

        Order result =
                orderService.updateOrder(999L, updated);

        assertNull(result);

        verify(orderRepository, never())
                .save(any());
    }

    @Test
    void shouldDeleteOrder() {
        when(orderRepository.existsById(1L))
                .thenReturn(true);

        boolean result =
                orderService.deleteOrder(1L);

        assertTrue(result);

        verify(orderRepository).deleteById(1L);
    }

    @Test
    void shouldReturnFalseWhenDeletingNonExistingOrder() {
        when(orderRepository.existsById(999L))
                .thenReturn(false);

        boolean result =
                orderService.deleteOrder(999L);

        assertFalse(result);

        verify(orderRepository, never())
                .deleteById(anyLong());
    }

    @Test
    void shouldGetOrdersByBookId() {
        List<Order> orders =
                List.of(new Order(1L, 1L, 2));

        when(orderRepository.findByBookId(1L))
                .thenReturn(orders);

        List<Order> result =
                orderService.getOrdersByBookId(1L);

        assertEquals(1, result.size());
        verify(orderRepository).findByBookId(1L);
    }

    @Test
    void shouldGetBookFromBookService() {
        BookResponse book =
                new BookResponse(
                        1L,
                        "Spring Boot",
                        "James",
                        500
                );

        when(restClient.get()
                .uri("/books/{id}", 1L)
                .retrieve()
                .body(BookResponse.class))
                .thenReturn(book);

        BookResponse result =
                orderService.getBookFromBookService(1L);

        assertNotNull(result);
        assertEquals(1L, result.getId());
        assertEquals("Spring Boot", result.getTitle());
        assertEquals("James", result.getAuthor());
        assertEquals(500, result.getPrice());
    }
}