interface SolidPayment {
    void pay(double amount);
}

class SolidCardPayment implements SolidPayment {
    public void pay(double amount) {
        System.out.println("Paid by card: " + amount);
    }
}

class SolidCashPayment implements SolidPayment {
    public void pay(double amount) {
        System.out.println("Paid by cash: " + amount);
    }
}

interface OrderRepository {
    void save(String item);
}

class DatabaseOrderRepository implements OrderRepository {
    public void save(String item) {
        System.out.println("Order saved: " + item);
    }
}

interface Notification {
    void send(String message);
}

class EmailNotification implements Notification {
    public void send(String message) {
        System.out.println("Email: " + message);
    }
}

interface Invoice {
    void generate(double amount);
}

class SimpleInvoice implements Invoice {
    public void generate(double amount) {
        System.out.println("Invoice generated: " + amount);
    }
}

class OrderService {

    private SolidPayment payment;
    private OrderRepository repository;
    private Notification notification;
    private Invoice invoice;

    OrderService(SolidPayment payment,
                 OrderRepository repository,
                 Notification notification,
                 Invoice invoice) {

        this.payment = payment;
        this.repository = repository;
        this.notification = notification;
        this.invoice = invoice;
    }

    void placeOrder(String item, double price) {

        double total = price + 50;

        System.out.println("Processing order: " + item);

        payment.pay(total);
        repository.save(item);
        notification.send("Order placed successfully");
        invoice.generate(total);
    }
}

public class SolidECommerceExample {

    public static void main(String[] args) {

        SolidPayment payment = new SolidCardPayment();
        OrderRepository repository = new DatabaseOrderRepository();
        Notification notification = new EmailNotification();
        Invoice invoice = new SimpleInvoice();

        OrderService order = new OrderService(
                payment,
                repository,
                notification,
                invoice
        );

        order.placeOrder("Laptop", 50000);
    }
}