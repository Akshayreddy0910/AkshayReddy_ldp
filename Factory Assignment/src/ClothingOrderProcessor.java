public class ClothingOrderProcessor implements OrderProcessor {

    @Override
    public String getOrderType() {
        return "clothing";
    }

    @Override
    public void processOrder() {
        System.out.println("Processing clothing order...");
    }
}
