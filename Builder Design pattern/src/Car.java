public class Car {
    private final String engine;
    private final String color;
    private final int seats;

    Car(String engine, String color, int seats) {
        this.engine = engine;
        this.color = color;
        this.seats = seats;
    }

    public void displayDetails() {
        System.out.println("Engine: " + engine);
        System.out.println("Color: " + color);
        System.out.println("Seats: " + seats);
    }
}