package iterator;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

public class IteratorExample {

    public static void main(String[] args) {

        List<String> names = new ArrayList<>();

        names.add("Akshay");
        names.add("Rahul");
        names.add("John");

        Iterator<String> iterator = names.iterator();

        while (iterator.hasNext()) {

            String name = iterator.next();

            System.out.println(name);
        }
    }
}