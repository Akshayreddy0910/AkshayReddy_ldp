public class ObjectReferenceExample {

    ObjectReferenceExample(String message) {
        System.out.println(message);
    }

    public static void main(String[] args) {

        ObjectReferenceExample[] objects =
                new ObjectReferenceExample[10];

        System.out.println("Array of object references created.");

        objects[0] = new ObjectReferenceExample("Object created");
    }
}