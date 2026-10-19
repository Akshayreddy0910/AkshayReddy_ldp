public class CarBuilder {
    private String engine;
    private String color;
    private int seats;

    public CarBuilder setEngine(String engine) {
        this.engine = engine;
        return this;
    }

    public CarBuilder setColor(String color) {
        this.color = color;
        return this;
    }

    public CarBuilder setSeats(int seats) {
        this.seats = seats;
        return this;
    }

    public Car build() {
        return new Car(engine, color, seats);
    }
}