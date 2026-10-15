
package Calculator;

public class ProgrammerCalculator implements Calculator {

    @Override
    public void calculate() {
        int a = 10;
        int b = 5;

        System.out.println("Programmer Calculator");
        System.out.println("Binary: " + Integer.toBinaryString(a));
        System.out.println("Hexadecimal: " + Integer.toHexString(a));
        System.out.println("Bitwise AND: " + (a & b));
        System.out.println("Bitwise OR: " + (a | b));
    }
}
