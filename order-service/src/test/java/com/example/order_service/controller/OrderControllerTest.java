package com.example.order_service.controller;

import com.example.order_service.dto.BookResponse;
import com.example.order_service.model.Order;
import com.example.order_service.service.OrderService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import java.util.List;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.eq;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.delete;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.put;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@ExtendWith(MockitoExtension.class)
class OrderControllerTest {

    @Mock
    private OrderService orderService;

    @InjectMocks
    private OrderController orderController;

    private MockMvc mockMvc;

    @BeforeEach
    void setUp() {
        mockMvc = MockMvcBuilders
                .standaloneSetup(orderController)
                .build();
    }

    @Test
    void shouldGetAllOrders() throws Exception {
        List<Order> orders =
                List.of(new Order(1L, 1L, 2));

        when(orderService.getAllOrders())
                .thenReturn(orders);

        mockMvc.perform(get("/orders"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$[0].id").value(1))
                .andExpect(jsonPath("$[0].bookId").value(1))
                .andExpect(jsonPath("$[0].quantity").value(2));
    }

    @Test
    void shouldGetOrderById() throws Exception {
        Order order =
                new Order(1L, 1L, 2);

        when(orderService.getOrderById(1L))
                .thenReturn(order);

        mockMvc.perform(get("/orders/1"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.id").value(1))
                .andExpect(jsonPath("$.bookId").value(1))
                .andExpect(jsonPath("$.quantity").value(2));
    }

    @Test
    void shouldReturnNotFoundWhenOrderDoesNotExist()
            throws Exception {

        when(orderService.getOrderById(999L))
                .thenReturn(null);

        mockMvc.perform(get("/orders/999"))
                .andExpect(status().isNotFound());
    }

    @Test
    void shouldGetOrdersByBookId() throws Exception {
        List<Order> orders =
                List.of(new Order(1L, 1L, 2));

        when(orderService.getOrdersByBookId(1L))
                .thenReturn(orders);

        mockMvc.perform(get("/orders/book/1"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$[0].bookId").value(1));
    }

    @Test
    void shouldCreateOrder() throws Exception {
        Order order =
                new Order(1L, 1L, 2);

        when(orderService.createOrder(any(Order.class)))
                .thenReturn(order);

        String requestBody = """
                {
                    "bookId": 1,
                    "quantity": 2
                }
                """;

        mockMvc.perform(
                        post("/orders")
                                .contentType(MediaType.APPLICATION_JSON)
                                .content(requestBody)
                )
                .andExpect(status().isCreated())
                .andExpect(jsonPath("$.id").value(1))
                .andExpect(jsonPath("$.bookId").value(1))
                .andExpect(jsonPath("$.quantity").value(2));
    }

    @Test
    void shouldUpdateOrder() throws Exception {
        Order order =
                new Order(1L, 1L, 5);

        when(orderService.updateOrder(
                eq(1L),
                any(Order.class)
        )).thenReturn(order);

        String requestBody = """
                {
                    "bookId": 1,
                    "quantity": 5
                }
                """;

        mockMvc.perform(
                        put("/orders/1")
                                .contentType(MediaType.APPLICATION_JSON)
                                .content(requestBody)
                )
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.id").value(1))
                .andExpect(jsonPath("$.bookId").value(1))
                .andExpect(jsonPath("$.quantity").value(5));
    }

    @Test
    void shouldReturnNotFoundWhenUpdatingMissingOrder()
            throws Exception {

        Order order =
                new Order(null, 1L, 5);

        when(orderService.updateOrder(
                eq(999L),
                any(Order.class)
        )).thenReturn(null);

        String requestBody = """
                {
                    "bookId": 1,
                    "quantity": 5
                }
                """;

        mockMvc.perform(
                        put("/orders/999")
                                .contentType(MediaType.APPLICATION_JSON)
                                .content(requestBody)
                )
                .andExpect(status().isNotFound());
    }

    @Test
    void shouldDeleteOrder() throws Exception {
        when(orderService.deleteOrder(1L))
                .thenReturn(true);

        mockMvc.perform(delete("/orders/1"))
                .andExpect(status().isOk())
                .andExpect(
                        content().string(
                                "Order deleted successfully"
                        )
                );
    }

    @Test
    void shouldReturnNotFoundWhenDeletingMissingOrder()
            throws Exception {

        when(orderService.deleteOrder(999L))
                .thenReturn(false);

        mockMvc.perform(delete("/orders/999"))
                .andExpect(status().isNotFound());
    }

    @Test
    void shouldGetBookForOrder() throws Exception {
        Order order =
                new Order(1L, 1L, 2);

        BookResponse book =
                new BookResponse(
                        1L,
                        "Spring Boot",
                        "James",
                        500
                );

        when(orderService.getOrderById(1L))
                .thenReturn(order);

        when(orderService.getBookFromBookService(1L))
                .thenReturn(book);

        mockMvc.perform(get("/orders/1/book"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.id").value(1))
                .andExpect(jsonPath("$.title")
                        .value("Spring Boot"))
                .andExpect(jsonPath("$.author")
                        .value("James"))
                .andExpect(jsonPath("$.price")
                        .value(500));
    }

    @Test
    void shouldReturnNotFoundWhenGettingBookForMissingOrder()
            throws Exception {

        when(orderService.getOrderById(999L))
                .thenReturn(null);

        mockMvc.perform(get("/orders/999/book"))
                .andExpect(status().isNotFound());
    }
}