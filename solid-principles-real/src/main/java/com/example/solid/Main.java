package com.example.solid;

public class Main {

    public static void main(String[] args) {
        Vehicle car = new Car();
        Vehicle bike = new Bike();

        Service service = new BasicService();
        PaymentProcessor payment = new UPIPayment();
        NotificationService notification = new EmailNotification();

        ServiceCenter center = new ServiceCenter(
                service,
                payment,
                notification
        );

        center.serviceVehicle(car);

        System.out.println("--------------------");

        center.serviceVehicle(bike);
    }
}
