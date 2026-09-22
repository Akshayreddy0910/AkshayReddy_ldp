package factory;

public class BicycleFactory {

    public static Cycle create() {
        return new Bicycle();
    }
}