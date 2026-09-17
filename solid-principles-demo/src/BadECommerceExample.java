class EmailService {
    void sendEmail(String message) {
        System.out.println("Email: " + message);
    }
}

class Database {
    void saveOrder(String item) {
        System.out.println("Order saved: " + item);
    }
}

interface Payment {
    void pay(double amount);
    void refund(double amount);
}

class CardPayment implements Payment {
    public void pay(double amount) {
        System.out.println("Paid by card: " + amount);
    }

    public void refund(double amount) {
        System.out.println("Refunded: " + amount);
    }
}

class CashPayment implements Payment {
    public void pay(double amount) {
        System.out.println("Paid by cash: " + amount);
    }

    public void refund(double amount) {
        throw new UnsupportedOperationException("Cash payment cannot be refunded");
    }
}

interface OrderOperations {
    void placeOrder();
    void cancelOrder();
    void makePayment();
    void sendNotification();
}

class BasicOrder implements OrderOperations {
    public void placeOrder() {
        System.out.println("Order placed");
    }

    public void cancelOrder() {
        System.out.println("Order cancelled");
    }

    public void makePayment() {
        System.out.println("Payment made");
    }

    public void sendNotification() {
        System.out.println("Notification sent");
    }
}

class BadOrderService {

    void processOrder(String item, double price, String paymentType) {

        System.out.println("Processing order: " + item);

        double total = price + 50;

        if (paymentType.equals("card")) {
            System.out.println("Paid by card: " + total);
        } else if (paymentType.equals("cash")) {
            System.out.println("Paid by cash: " + total);
        }

        Database database = new Database();
        database.saveOrder(item);

        EmailService email = new EmailService();
        email.sendEmail("Order placed successfully");

        System.out.println("Invoice generated: " + total);
    }
}

public class BadECommerceExample {

    public static void main(String[] args) {

        BadOrderService order = new BadOrderService();
        order.processOrder("Laptop", 50000, "card");

        Payment payment = new CashPayment();
        payment.pay(1000);

        BasicOrder basicOrder = new BasicOrder();
        basicOrder.placeOrder();
    }
}