
package Calculator;

public class ScientificCalculatorFactory extends CalculatorFactory {

    @Override
    public Calculator createCalculator() {
        return new ScientificCalculator();
    }
}
