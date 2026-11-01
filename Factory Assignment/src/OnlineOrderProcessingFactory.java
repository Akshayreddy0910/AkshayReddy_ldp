import java.util.ServiceLoader;

public class OnlineOrderProcessingFactory {

    public static OrderProcessor createProcessor(String type) {
        for (OrderProcessor processor :
                ServiceLoader.load(OrderProcessor.class)) {

            if (processor.getOrderType().equalsIgnoreCase(type)) {
                return processor;
            }
        }

        throw new IllegalArgumentException(
                "Unknown order type: " + type
        );
    }
}
