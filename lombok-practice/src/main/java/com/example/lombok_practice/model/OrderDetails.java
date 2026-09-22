package com.example.lombok_practice.model;

import lombok.Builder;
import lombok.ToString;

@Builder
@ToString
public class OrderDetails {

    private int orderId;
    private String customerName;
    private String productName;
    private double amount;
}