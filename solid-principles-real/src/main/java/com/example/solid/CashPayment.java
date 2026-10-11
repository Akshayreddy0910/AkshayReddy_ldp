package com.example.solid;

public class CashPayment implements PaymentProcessor {

    @Override
    public void pay(double amount) {
        System.out.println("Paid ₹" + amount + " using Cash");
    }
}
