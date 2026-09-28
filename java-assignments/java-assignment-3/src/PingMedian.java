import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Scanner;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class PingMedian {

    public static double pingMedian(String host) {

        List<Long> times = new ArrayList<>();

        try {
            ProcessBuilder processBuilder =
                    new ProcessBuilder("ping", "-n", "5", host);

            Process process = processBuilder.start();

            BufferedReader reader = new BufferedReader(
                    new InputStreamReader(process.getInputStream())
            );

            Pattern pattern = Pattern.compile("time[=<](\\d+)ms");

            String line;

            while ((line = reader.readLine()) != null) {
                Matcher matcher = pattern.matcher(line);

                if (matcher.find()) {
                    times.add(Long.parseLong(matcher.group(1)));
                }
            }

            process.waitFor();

        } catch (Exception e) {
            System.out.println("Unable to ping the host.");
        }

        if (times.isEmpty()) {
            return -1;
        }

        Collections.sort(times);

        int middle = times.size() / 2;

        if (times.size() % 2 == 1) {
            return times.get(middle);
        }

        return (times.get(middle - 1) + times.get(middle)) / 2.0;
    }

    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter host: ");
        String host = scanner.nextLine();

        double median = pingMedian(host);

        if (median == -1) {
            System.out.println("No ping response received.");
        } else {
            System.out.println("Median ping time: " + median + " ms");
        }

        scanner.close();
    }
}