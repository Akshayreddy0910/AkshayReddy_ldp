
package Calculator;

public class Main {

    public static void main(String[] args) {

        CalculatorFactory basicFactory =
                new BasicCalculatorFactory();

        Calculator basic = basicFactory.createCalculator();
        basic.calculate();

        System.out.println();

        CalculatorFactory scientificFactory =
                new ScientificCalculatorFactory();

        Calculator scientific =
                scientificFactory.createCalculator();

        scientific.calculate();

        System.out.println();

        CalculatorFactory programmerFactory =
                new ProgrammerCalculatorFactory();

        Calculator programmer =
                programmerFactory.createCalculator();

        programmer.calculate();
    }
}
