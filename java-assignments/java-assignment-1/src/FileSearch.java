import java.io.IOException;
import java.nio.file.FileVisitResult;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.SimpleFileVisitor;
import java.nio.file.attribute.BasicFileAttributes;
import java.util.Scanner;
import java.util.regex.Pattern;
import java.util.regex.PatternSyntaxException;

public class FileSearch {

    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        String homeDirectory = System.getProperty("user.home");
        Path homePath = Paths.get(homeDirectory);

        System.out.println("File Search");
        System.out.println("Search location: " + homeDirectory);
        System.out.println("Enter regex to search files.");
        System.out.println("Type 'exit' to stop.");

        while (true) {

            System.out.print("\nEnter regex: ");
            String regex = scanner.nextLine();

            if (regex.equalsIgnoreCase("exit")) {
                break;
            }

            try {
                Pattern pattern = Pattern.compile(regex);

                Files.walkFileTree(homePath, new SimpleFileVisitor<Path>() {

                    @Override
                    public FileVisitResult visitFile(
                            Path file,
                            BasicFileAttributes attributes) {

                        String fileName = file.getFileName().toString();

                        if (pattern.matcher(fileName).matches()) {
                            System.out.println(file.toAbsolutePath());
                        }

                        return FileVisitResult.CONTINUE;
                    }

                    @Override
                    public FileVisitResult visitFileFailed(
                            Path file,
                            IOException exception) {

                        return FileVisitResult.CONTINUE;
                    }
                });

            } catch (PatternSyntaxException e) {
                System.out.println("Invalid regular expression.");

            } catch (IOException e) {
                System.out.println("Error while searching files.");
            }
        }

        scanner.close();
    }
}