package akshay.assignment.singleton;

public class StringSingleton {

    String text;

    public static StringSingleton initialize(String value) {
        StringSingleton object = new StringSingleton();
        object.text = value;
        return object;
    }

    public void printString() {
        System.out.println(text);
    }
}