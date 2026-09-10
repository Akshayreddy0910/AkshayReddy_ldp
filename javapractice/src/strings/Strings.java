package strings;

public class Strings {

    public static void main(String[] args) {


        String name = "Akshay";
        String city = new String("Hyderabad");

        System.out.println("--- Creating Strings ---");
        System.out.println("Name: " + name);
        System.out.println("City: " + city);


        System.out.println("\n--- Length ---");

        String message = "Hello Java";

        System.out.println("Message: " + message);
        System.out.println("Length: " + message.length());



        System.out.println("\n--- charAt() ---");

        String word = "Java";

        System.out.println("First character: " + word.charAt(0));
        System.out.println("Second character: " + word.charAt(1));



        System.out.println("\n--- Case Conversion ---");

        String text = "Hello Java";

        System.out.println(text.toUpperCase());
        System.out.println(text.toLowerCase());


        System.out.println("\n--- concat() ---");

        String firstName = "Akshay";
        String lastName = "Reddy";

        String fullName = firstName.concat(" ").concat(lastName);

        System.out.println("Full Name: " + fullName);



        System.out.println("\n--- + Operator ---");

        String first = "Hello";
        String second = "World";

        String result = first + " " + second;

        System.out.println(result);



        System.out.println("\n--- equals() ---");

        String s1 = "Java";
        String s2 = "Java";
        String s3 = "java";

        System.out.println(s1.equals(s2));
        System.out.println(s1.equals(s3));


        System.out.println("\n--- equalsIgnoreCase() ---");

        System.out.println(s1.equalsIgnoreCase(s3));



        System.out.println("\n--- contains() ---");

        String sentence = "Java is a programming language";

        System.out.println(sentence.contains("Java"));
        System.out.println(sentence.contains("Python"));



        System.out.println("\n--- startsWith() / endsWith() ---");

        String fileName = "document.pdf";

        System.out.println(fileName.startsWith("doc"));
        System.out.println(fileName.endsWith(".pdf"));



        System.out.println("\n--- indexOf() ---");

        String programming = "Java Programming";

        System.out.println(programming.indexOf("Java"));
        System.out.println(programming.indexOf("Programming"));



        System.out.println("\n--- substring() ---");

        String language = "Java Programming";

        System.out.println(language.substring(0, 4));
        System.out.println(language.substring(5));



        System.out.println("\n--- replace() ---");

        String original = "I like Java";

        String replaced = original.replace("Java", "Python");

        System.out.println("Original: " + original);
        System.out.println("Replaced: " + replaced);



        System.out.println("\n--- trim() ---");

        String spaces = "   Hello Java   ";

        System.out.println("Before: [" + spaces + "]");
        System.out.println("After: [" + spaces.trim() + "]");


        System.out.println("\n--- isEmpty() ---");

        String emptyString = "";

        System.out.println(emptyString.isEmpty());


        System.out.println("\n--- String Immutability ---");

        String originalText = "Hello";

        originalText.concat(" Java");

        System.out.println("After concat without assignment: " + originalText);

        originalText = originalText.concat(" Java");

        System.out.println("After assignment: " + originalText);


        System.out.println("\n--- StringBuilder ---");

        StringBuilder builder = new StringBuilder("Hello");

        builder.append(" Java");
        builder.append(" World");

        System.out.println("Builder: " + builder);

        builder.insert(6, "Beautiful ");

        System.out.println("After insert: " + builder);

        builder.replace(6, 16, "Amazing");

        System.out.println("After replace: " + builder);

        builder.delete(6, 13);

        System.out.println("After delete: " + builder);

        builder.reverse();

        System.out.println("After reverse: " + builder);


        System.out.println("\n--- StringBuffer ---");

        StringBuffer buffer = new StringBuffer("Hello");

        buffer.append(" Java");

        System.out.println("Buffer: " + buffer);

        buffer.insert(6, "World ");

        System.out.println("After insert: " + buffer);

        buffer.reverse();

        System.out.println("After reverse: " + buffer);

        System.out.println("\n--- String Types ---");

        System.out.println("String      -> Immutable");
        System.out.println("StringBuilder -> Mutable");
        System.out.println("StringBuffer  -> Mutable + Synchronized");
    }
}