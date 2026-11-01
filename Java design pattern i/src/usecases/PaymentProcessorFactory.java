
package usecases;

public class PaymentProcessorFactory {

    public static PaymentProcessor createProcessor(String type) {
        if (type.equalsIgnoreCase("upi")) {
            return new UPIPaymentProcessor();
        }

        if (type.equalsIgnoreCase("card")) {
            return new CardPaymentProcessor();
        }

        throw new IllegalArgumentException(
                "Unsupported payment type: " + type
        );
    }
}
