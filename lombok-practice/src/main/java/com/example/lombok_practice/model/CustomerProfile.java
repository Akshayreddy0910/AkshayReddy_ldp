package com.example.lombok_practice.model;

import lombok.Data;

@Data
public class CustomerProfile {

    private int customerId;
    private String customerName;
    private String email;
}