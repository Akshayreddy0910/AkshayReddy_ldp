package wrapperclasses;

public class WrapperExample {

    public static void main(String[] args) {

        // Primitive types
        int number = 10;
        double price = 25.5;
        char letter = 'A';
        boolean status = true;

        // Wrapper classes
        Integer integerNumber = 10;
        Double doublePrice = 25.5;
        Character character = 'A';
        Boolean booleanStatus = true;

        System.out.println(integerNumber);
        System.out.println(doublePrice);
        System.out.println(character);
        System.out.println(booleanStatus);


        // Autoboxing
        int value = 20;
        Integer boxedValue = value;

        System.out.println("Autoboxing: " + boxedValue);


        // Unboxing
        Integer boxedNumber = 30;
        int unboxedNumber = boxedNumber;

        System.out.println("Unboxing: " + unboxedNumber);


        // Converting String to Integer
        String text = "100";
        int convertedNumber = Integer.parseInt(text);

        System.out.println("Converted number: " + convertedNumber);
    }
}