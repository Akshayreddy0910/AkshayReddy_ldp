package regex;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class RegexExample {

    public static void main(String[] args) {

        // Check if a string contains only digits
        String number = "12345";

        Pattern pattern = Pattern.compile("\\d+");
        Matcher matcher = pattern.matcher(number);

        System.out.println("Only digits: " + matcher.matches());


        // Find numbers inside a sentence
        String text = "I have 2 phones and 3 laptops.";

        Pattern numberPattern = Pattern.compile("\\d+");
        Matcher numberMatcher = numberPattern.matcher(text);

        while (numberMatcher.find()) {
            System.out.println("Found number: " + numberMatcher.group());
        }


        // Simple email validation
        String email = "akshay@gmail.com";

        boolean validEmail =
                email.matches("^[A-Za-z0-9+_.-]+@[A-Za-z0-9.-]+$");

        System.out.println("Valid email: " + validEmail);
    }
}