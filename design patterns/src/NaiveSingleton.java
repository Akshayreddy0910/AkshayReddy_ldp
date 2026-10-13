
public class NaiveSingleton {

    private static NaiveSingleton instance;

    private NaiveSingleton() {
        System.out.println("Naive Singleton created");
    }

    public static NaiveSingleton getInstance() {
        if (instance == null) {
            instance = new NaiveSingleton();
        }
        return instance;
    }
}
