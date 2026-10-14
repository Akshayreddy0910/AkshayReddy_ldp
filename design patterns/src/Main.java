
public class Main {

    public static void main(String[] args) {

        System.out.println("=== Naive Singleton ===");

        NaiveSingleton n1 = NaiveSingleton.getInstance();
        NaiveSingleton n2 = NaiveSingleton.getInstance();

        System.out.println("Same instance: " + (n1 == n2));


        System.out.println("\n=== Thread-Safe Singleton ===");

        ThreadSafeSingleton t1 =
                ThreadSafeSingleton.getInstance();

        ThreadSafeSingleton t2 =
                ThreadSafeSingleton.getInstance();

        System.out.println("Same instance: " + (t1 == t2));


        System.out.println("\n=== Database Connection Manager ===");

        DatabaseConnectionManager d1 =
                DatabaseConnectionManager.getInstance();

        DatabaseConnectionManager d2 =
                DatabaseConnectionManager.getInstance();

        d1.connect();
        d2.connect();

        System.out.println("Same instance: " + (d1 == d2));
    }
}
