public class Unicycle extends Cycle {

    public void balance() {
        System.out.println("Unicycle balance");
    }

    public static void main(String[] args) {
        Unicycle unicycle = new Unicycle();
        unicycle.ride();
        unicycle.balance();
    }
}