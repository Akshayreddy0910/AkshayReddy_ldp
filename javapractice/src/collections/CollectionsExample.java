package collections;

import java.util.*;

public class CollectionsExample {

    public static void main(String[] args) {

        // List
        List<String> names = new ArrayList<>();

        names.add("Akshay");
        names.add("Rahul");
        names.add("John");
        names.add("Akshay");

        System.out.println("List: " + names);
        System.out.println("First name: " + names.get(0));


        // LinkedList
        LinkedList<Integer> numbers = new LinkedList<>();

        numbers.add(10);
        numbers.add(20);
        numbers.add(30);

        numbers.addFirst(5);
        numbers.addLast(40);

        System.out.println("LinkedList: " + numbers);


        // Set
        Set<String> cities = new HashSet<>();

        cities.add("Hyderabad");
        cities.add("Delhi");
        cities.add("Mumbai");
        cities.add("Hyderabad");

        System.out.println("Set: " + cities);


        // Queue
        Queue<String> queue = new LinkedList<>();

        queue.add("First");
        queue.add("Second");
        queue.add("Third");

        System.out.println("Queue: " + queue);
        System.out.println("Removed: " + queue.poll());
        System.out.println("Queue after removal: " + queue);
    }
}