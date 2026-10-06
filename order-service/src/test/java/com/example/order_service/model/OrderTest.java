package com.example.order_service.model;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class OrderTest {

    @Test
    void shouldCreateOrderWithConstructor() {
        Order order = new Order(1L, 10L, 2);

        assertEquals(1L, order.getId());
        assertEquals(10L, order.getBookId());
        assertEquals(2, order.getQuantity());
    }

    @Test
    void shouldSetAndGetValues() {
        Order order = new Order();

        order.setId(1L);
        order.setBookId(10L);
        order.setQuantity(3);

        assertEquals(1L, order.getId());
        assertEquals(10L, order.getBookId());
        assertEquals(3, order.getQuantity());
    }
}