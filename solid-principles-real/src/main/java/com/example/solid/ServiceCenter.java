package com.example.solid;

public class ServiceCenter {

    private final Service service;
    private final PaymentProcessor paymentProcessor;
    private final NotificationService notificationService;

    public ServiceCenter(
            Service service,
            PaymentProcessor paymentProcessor,
            NotificationService notificationService) {
        this.service = service;
        this.paymentProcessor = paymentProcessor;
        this.notificationService = notificationService;
    }

    public void serviceVehicle(Vehicle vehicle) {
        double cost = service.calculateCost(vehicle);

        System.out.println("Vehicle: " + vehicle.getName());
        System.out.println("Service cost: ₹" + cost);

        paymentProcessor.pay(cost);

        notificationService.sendNotification(
                vehicle.getName() + " service completed"
        );
    }
}
