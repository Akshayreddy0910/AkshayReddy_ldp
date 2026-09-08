package hashset;

import java.util.HashSet;
import java.util.Set;

public class HashSetExample {

    public static void main(String[] args) {

        Set<String> names = new HashSet<>();

        names.add("Akshay");
        names.add("Rahul");
        names.add("John");
        names.add("Akshay");

        System.out.println("Names: " + names);

        System.out.println("Contains Rahul: " + names.contains("Rahul"));

        names.remove("John");

        System.out.println("After removing John: " + names);

        System.out.println("Size: " + names.size());
    }
}