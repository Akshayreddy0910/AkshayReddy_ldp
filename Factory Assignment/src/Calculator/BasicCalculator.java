
package Calculator;

public class BasicCalculator implements Calculator {

    @Override
    public void calculate() {
        int a = 20;
        int b = 10;

        System.out.println("Basic Calculator");
        System.out.println("Addition: " + (a + b));
        System.out.println("Subtraction: " + (a - b));
        System.out.println("Multiplication: " + (a * b));
        System.out.println("Division: " + ((double) a / b));
    }
}
