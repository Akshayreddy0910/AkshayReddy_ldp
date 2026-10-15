public class FoodOrderProcessor implements OrderProcessor {

    @Override
    public String getOrderType() {
        return "food";
    }

    @Override
    public void processOrder() {
        System.out.println("Processing food order...");
    }
}
