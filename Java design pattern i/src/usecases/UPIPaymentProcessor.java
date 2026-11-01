
package usecases;

public class UPIPaymentProcessor implements PaymentProcessor {

    @Override
    public void pay(double amount) {
        System.out.println("Processing UPI payment: ₹" + amount);
    }
}
