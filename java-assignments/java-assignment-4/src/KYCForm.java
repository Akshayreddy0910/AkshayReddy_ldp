import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.time.temporal.ChronoUnit;
import java.util.Scanner;

public class KYCForm {

    static DateTimeFormatter formatter =
            DateTimeFormatter.ofPattern("dd-MM-yyyy");

    public static void findRange(String signupInput, String currentInput) {

        LocalDate signupDate = LocalDate.parse(signupInput, formatter);
        LocalDate currentDate = LocalDate.parse(currentInput, formatter);

        LocalDate anniversary = LocalDate.of(
                currentDate.getYear(),
                signupDate.getMonth(),
                signupDate.getDayOfMonth()
        );

        if (!anniversary.isAfter(signupDate)) {
            anniversary = anniversary.plusYears(1);
        }

        long days = ChronoUnit.DAYS.between(currentDate, anniversary);

        if (days > 30) {
            System.out.println("No range");
            return;
        }

        LocalDate startDate = anniversary.minusDays(30);
        LocalDate endDate;

        if (currentDate.isBefore(anniversary)) {
            endDate = currentDate;
        } else {
            endDate = anniversary.plusDays(30);

            if (currentDate.isBefore(endDate)) {
                endDate = currentDate;
            }
        }

        System.out.println(
                startDate.format(formatter) + " " +
                        endDate.format(formatter)
        );
    }

    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        int n = scanner.nextInt();

        for (int i = 0; i < n; i++) {

            String signupDate = scanner.next();
            String currentDate = scanner.next();

            findRange(signupDate, currentDate);
        }

        scanner.close();
    }
}