
package Calculator;

public class BasicCalculatorFactory extends CalculatorFactory {

    @Override
    public Calculator createCalculator() {
        return new BasicCalculator();
    }
}
