package exceptions;

public class ExceptionsExample {

    public static void main(String[] args) {

        // try-catch
        try {
            int result = 10 / 0;
            System.out.println(result);
        } catch (ArithmeticException e) {
            System.out.println("Cannot divide by zero");
        }


        // finally
        try {
            int number = 10 / 2;
            System.out.println("Result: " + number);
        } catch (ArithmeticException e) {
            System.out.println("Something went wrong");
        } finally {
            System.out.println("Finally block executed");
        }


        // throw
        try {
            checkAge(16);
        } catch (IllegalArgumentException e) {
            System.out.println(e.getMessage());
        }
    }

    static void checkAge(int age) {

        if (age < 18) {
            throw new IllegalArgumentException("Age must be 18 or above");
        }

        System.out.println("Eligible");
    }
}