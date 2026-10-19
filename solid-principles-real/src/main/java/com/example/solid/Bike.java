package com.example.solid;

public class Bike implements Vehicle {

    @Override
    public String getName() {
        return "Bike";
    }

    @Override
    public double getServiceCost() {
        return 1000;
    }
}
