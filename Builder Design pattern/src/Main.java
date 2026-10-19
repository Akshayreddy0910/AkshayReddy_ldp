public class Main {
    public static void main(String[] args) {
        Car car = new CarBuilder()
                .setEngine("V8")
                .setColor("Black")
                .setSeats(5)
                .build();

        car.displayDetails();
    }
}