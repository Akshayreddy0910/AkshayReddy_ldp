
package Calculator;

public class ProgrammerCalculatorFactory extends CalculatorFactory {

    @Override
    public Calculator createCalculator() {
        return new ProgrammerCalculator();
    }
}
