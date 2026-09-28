public class Main {

    public static void main(String[] args) {

        SList<String> list = new SList<>();
        SListIterator<String> iterator = list.iterator();

        iterator.add("Apple");
        iterator.add("Banana");
        iterator.add("Orange");

        System.out.println("List: " + list);

        iterator.remove("Banana");

        System.out.println("After removing Banana: " + list);
    }
}