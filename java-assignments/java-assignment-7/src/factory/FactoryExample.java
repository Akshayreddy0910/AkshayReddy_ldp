package factory;

public class FactoryExample {

    public static void main(String[] args) {

        Cycle unicycle = UnicycleFactory.create();
        Cycle bicycle = BicycleFactory.create();
        Cycle tricycle = TricycleFactory.create();

        unicycle.ride();
        bicycle.ride();
        tricycle.ride();
    }
}