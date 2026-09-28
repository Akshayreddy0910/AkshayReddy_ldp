import java.util.Scanner;
import java.util.regex.Pattern;

public class SentenceRegex {

    public static boolean isValidSentence(String sentence) {

        String regex = "^[A-Z].*\\.$";

        return Pattern.matches(regex, sentence);
    }

    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter a sentence: ");
        String sentence = scanner.nextLine();

        if (isValidSentence(sentence)) {
            System.out.println("Valid sentence");
        } else {
            System.out.println("Invalid sentence");
        }

        scanner.close();
    }
}