public class VampireNumbers {

    public static boolean isVampire(int number) {

        String value = String.valueOf(number);
        int digits = value.length();

        if (digits % 2 != 0) {
            return false;
        }

        int half = digits / 2;
        int start = (int) Math.pow(10, half - 1);
        int end = (int) Math.sqrt(number);

        for (int x = start; x <= end; x++) {

            if (number % x != 0) {
                continue;
            }

            int y = number / x;

            if (y < start || y >= start * 10) {
                continue;
            }

            if (x % 10 == 0 && y % 10 == 0) {
                continue;
            }

            String combined = String.valueOf(x) + y;

            if (sameDigits(value, combined)) {
                return true;
            }
        }

        return false;
    }

    public static boolean sameDigits(String first, String second) {

        if (first.length() != second.length()) {
            return false;
        }

        int[] count = new int[10];

        for (char ch : first.toCharArray()) {
            count[ch - '0']++;
        }

        for (char ch : second.toCharArray()) {
            count[ch - '0']--;
        }

        for (int value : count) {
            if (value != 0) {
                return false;
            }
        }

        return true;
    }

    public static void main(String[] args) {

        int count = 0;
        int number = 10;

        while (count < 100) {

            if (isVampire(number)) {
                System.out.println(number);
                count++;
            }

            number++;
        }
    }
}