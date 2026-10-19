
package Calculator;

public class ScientificCalculator implements Calculator {

    @Override
    public void calculate() {
        System.out.println("Scientific Calculator");
        System.out.println("Square root: " + Math.sqrt(25));
        System.out.println("Power: " + Math.pow(2, 3));
        System.out.println("Sine: " + Math.sin(Math.toRadians(30)));
        System.out.println("Cosine: " + Math.cos(Math.toRadians(60)));
    }
}
