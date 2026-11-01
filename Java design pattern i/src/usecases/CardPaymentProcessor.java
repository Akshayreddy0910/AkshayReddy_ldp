
package usecases;

public class CardPaymentProcessor implements PaymentProcessor {

    @Override
    public void pay(double amount) {
        System.out.println("Processing card payment: ₹" + amount);
    }
}
