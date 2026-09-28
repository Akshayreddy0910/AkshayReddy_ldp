package akshay.assignment.main;

import akshay.assignment.data.DefaultInitialization;
import akshay.assignment.singleton.StringSingleton;

public class Main {

    public static void main(String[] args) {

        DefaultInitialization data = new DefaultInitialization();
        data.printDefaultValues();

        StringSingleton object =
                StringSingleton.initialize("Hello Java");

        object.printString();
    }
}