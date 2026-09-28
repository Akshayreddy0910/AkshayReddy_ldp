public class AlphabetCheck {

    /*
     * Checks whether the input string contains all letters from a to z.
     *
     * Time Complexity: O(n)
     * Space Complexity: O(1)
     */
    public static boolean containsAllLetters(String input) {

        boolean[] seen = new boolean[26];

        for (char ch : input.toLowerCase().toCharArray()) {

            if (ch >= 'a' && ch <= 'z') {
                seen[ch - 'a'] = true;
            }
        }

        for (boolean letter : seen) {

            if (!letter) {
                return false;
            }
        }

        return true;
    }

    public static void main(String[] args) {

        System.out.println(
                containsAllLetters("abcdefghijklmnopqrstuvwxyz")
        );

        System.out.println(
                containsAllLetters("ABCDEFGHIJKLMNOPQRSTUVWXYZ")
        );

        System.out.println(
                containsAllLetters("The quick brown fox jumps over the lazy dog")
        );

        System.out.println(
                containsAllLetters("hello world")
        );
    }
}