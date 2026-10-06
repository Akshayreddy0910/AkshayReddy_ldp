package com.example.order_service.service;

import com.example.order_service.dto.BookResponse;
import com.example.order_service.model.Order;
import com.example.order_service.repository.OrderRepository;
import org.springframework.stereotype.Service;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.client.RestClient;

import java.util.List;

@Service
public class OrderService {

    private final OrderRepository orderRepository;
    private final RestClient restClient;

    public OrderService(
            OrderRepository orderRepository,
            RestClient restClient) {

        this.orderRepository = orderRepository;
        this.restClient = restClient;
    }

    public List<Order> getAllOrders() {
        return orderRepository.findAll();
    }

    public Order getOrderById(Long id) {
        return orderRepository.findById(id).orElse(null);
    }

    public Order createOrder(Order order) {
        return orderRepository.save(order);
    }

    public Order updateOrder(Long id, Order order) {

        Order existing = orderRepository.findById(id).orElse(null);

        if (existing == null) {
            return null;
        }

        existing.setBookId(order.getBookId());
        existing.setQuantity(order.getQuantity());

        return orderRepository.save(existing);
    }

    public boolean deleteOrder(Long id) {

        if (!orderRepository.existsById(id)) {
            return false;
        }

        orderRepository.deleteById(id);
        return true;
    }

    public List<Order> getOrdersByBookId(Long bookId) {
        return orderRepository.findByBookId(bookId);
    }

    public BookResponse getBookFromBookService(Long bookId) {

        try {
            return restClient
                    .get()
                    .uri("/books/{id}", bookId)
                    .retrieve()
                    .body(BookResponse.class);

        } catch (HttpClientErrorException.NotFound e) {
            return null;
        }
    }
}