public class ConstructorExample {

    ConstructorExample() {
        this("Default constructor");
        System.out.println("First constructor");
    }

    ConstructorExample(String message) {
        System.out.println(message);
    }

    public static void main(String[] args) {
        new ConstructorExample();
    }
}