package hashmap;

import java.util.HashMap;
import java.util.Map;

public class HashMapExample {

    public static void main(String[] args) {

        Map<String, Integer> marks = new HashMap<>();

        marks.put("Akshay", 85);
        marks.put("Rahul", 75);
        marks.put("John", 90);

        System.out.println("Marks: " + marks);

        System.out.println("Akshay's marks: " + marks.get("Akshay"));

        System.out.println("Contains Rahul: " + marks.containsKey("Rahul"));

        marks.put("Akshay", 95);

        System.out.println("Updated marks: " + marks);

        marks.remove("John");

        System.out.println("After removing John: " + marks);

        System.out.println("All students: " + marks.keySet());
        System.out.println("All marks: " + marks.values());
    }
}