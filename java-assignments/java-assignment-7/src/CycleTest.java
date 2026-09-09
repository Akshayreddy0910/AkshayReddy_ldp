public class CycleTest {

    public static void main(String[] args) {

        Cycle[] cycles = {
                new Unicycle(),
                new Bicycle(),
                new Tricycle()
        };

        for (Cycle cycle : cycles) {
            cycle.ride();
        }

        System.out.println();

        Unicycle unicycle = (Unicycle) cycles[0];
        unicycle.balance();

        Bicycle bicycle = (Bicycle) cycles[1];
        bicycle.balance();

        Tricycle tricycle = (Tricycle) cycles[2];

        System.out.println();

        System.out.println("Trying to call balance() through Cycle reference:");

        for (Cycle cycle : cycles) {
            if (cycle instanceof Unicycle) {
                ((Unicycle) cycle).balance();
            } else if (cycle instanceof Bicycle) {
                ((Bicycle) cycle).balance();
            } else {
                System.out.println("Tricycle has no balance() method");
            }
        }
    }
}