public class Bicycle extends Cycle {

    public void balance() {
        System.out.println("Bicycle balance");
    }

    public static void main(String[] args) {
        Bicycle bicycle = new Bicycle();
        bicycle.ride();
        bicycle.balance();
    }
}