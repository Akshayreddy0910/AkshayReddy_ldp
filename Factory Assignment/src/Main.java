public class Main {
    public static void main(String[] args) {

        OrderProcessor food =
                OnlineOrderProcessingFactory.createProcessor("food");
        food.processOrder();

        OrderProcessor clothing =
                OnlineOrderProcessingFactory.createProcessor("clothing");
        clothing.processOrder();
    }
}
