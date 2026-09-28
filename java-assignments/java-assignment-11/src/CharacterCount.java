import java.io.FileWriter;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.LinkedHashMap;
import java.util.Map;

public class CharacterCount {

    public static void main(String[] args) {

        if (args.length == 0) {
            System.out.println("Please provide a file name.");
            return;
        }

        String fileName = args[0];
        Map<Character, Integer> countMap = new LinkedHashMap<>();

        try {
            String text = new String(Files.readAllBytes(Paths.get(fileName)));

            for (char ch : text.toCharArray()) {
                countMap.put(ch, countMap.getOrDefault(ch, 0) + 1);
            }

            FileWriter writer = new FileWriter("output.txt");

            for (Map.Entry<Character, Integer> entry : countMap.entrySet()) {
                writer.write(entry.getKey() + " = " + entry.getValue() + "\n");
            }

            writer.close();

            System.out.println("Character counts saved to output.txt");

        } catch (IOException e) {
            System.out.println("Error reading or writing file.");
        }
    }
}