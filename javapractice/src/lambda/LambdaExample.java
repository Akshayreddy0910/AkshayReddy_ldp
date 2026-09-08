package lambda;

import java.util.ArrayList;
import java.util.List;
import java.util.function.Predicate;

public class LambdaExample {

    public static void main(String[] args) {

        // Lambda with no parameters
        Runnable message = () -> System.out.println("Hello Java");
        message.run();


        // Lambda with parameters
        Calculator add = (a, b) -> a + b;

        System.out.println("Sum: " + add.calculate(10, 20));


        // Lambda with a collection
        List<String> names = new ArrayList<>();

        names.add("Akshay");
        names.add("Rahul");
        names.add("John");

        names.forEach(name -> System.out.println(name));


        // Lambda with Predicate
        Predicate<Integer> isAdult = age -> age >= 18;

        System.out.println("Is adult: " + isAdult.test(22));
    }
}

interface Calculator {

    int calculate(int a, int b);
}