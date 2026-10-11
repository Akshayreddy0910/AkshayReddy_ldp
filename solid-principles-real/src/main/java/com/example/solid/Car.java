package com.example.solid;

public class Car implements Vehicle {

    @Override
    public String getName() {
        return "Car";
    }

    @Override
    public double getServiceCost() {
        return 3000;
    }
}
