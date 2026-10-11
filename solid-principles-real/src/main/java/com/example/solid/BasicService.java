package com.example.solid;

public class BasicService implements Service {

    @Override
    public double calculateCost(Vehicle vehicle) {
        return vehicle.getServiceCost();
    }
}
