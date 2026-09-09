interface Payment {
    void pay();
}

class CardPayment implements Payment {
    public void pay() {
        System.out.println("Payment using card");
    }
}

class UpiPayment implements Payment {
    public void pay() {
        System.out.println("Payment using UPI");
    }
}

public class OCPExample {
    public static void main(String[] args) {
        Payment payment = new CardPayment();
        payment.pay();

        payment = new UpiPayment();
        payment.pay();
    }
}