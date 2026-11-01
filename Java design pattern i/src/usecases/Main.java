
package usecases;

public class Main {

    public static void main(String[] args) {

        // Singleton
        AppConfig config = AppConfig.getInstance();
        config.showConfig();

        System.out.println();

        // Builder
        Employee employee = new EmployeeBuilder()
                .setName("Akshay")
                .setAge(21)
                .setDepartment("Engineering")
                .setEmail("akshay@example.com")
                .build();

        employee.display();

        System.out.println();

        // Factory
        PaymentProcessor payment =
                PaymentProcessorFactory.createProcessor("upi");

        payment.pay(1500);
    }
}
