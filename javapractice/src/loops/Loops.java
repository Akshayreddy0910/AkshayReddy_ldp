package loops;

public class Loops {

    public static void main(String[] args) {

        System.out.println("--- FOR LOOP ---");

        for (int i = 1; i <= 5; i++) {
            System.out.println(i);
        }


        System.out.println("\n--- EVEN NUMBERS ---");

        for (int i = 1; i <= 10; i++) {

            if (i % 2 == 0) {
                System.out.println(i);
            }
        }



        System.out.println("\n--- WHILE LOOP ---");

        int i = 1;

        while (i <= 5) {
            System.out.println(i);
            i++;
        }


        System.out.println("\n--- DO-WHILE LOOP ---");

        int number = 1;

        do {
            System.out.println(number);
            number++;
        } while (number <= 5);



        System.out.println("\n--- DO-WHILE EXAMPLE ---");

        int value = 10;

        do {
            System.out.println("This runs once");
            value++;
        } while (value < 5);


        System.out.println("\n--- BREAK ---");

        for (int j = 1; j <= 10; j++) {

            if (j == 6) {
                break;
            }

            System.out.println(j);
        }


        System.out.println("\n--- CONTINUE ---");

        for (int j = 1; j <= 5; j++) {

            if (j == 3) {
                continue;
            }

            System.out.println(j);
        }


        System.out.println("\n--- NESTED LOOPS ---");

        for (int row = 1; row <= 3; row++) {

            for (int column = 1; column <= 3; column++) {

                System.out.print("* ");
            }

            System.out.println();
        }


        System.out.println("\n--- NUMBER PATTERN ---");

        for (int row = 1; row <= 5; row++) {

            for (int column = 1; column <= row; column++) {

                System.out.print(column + " ");
            }

            System.out.println();
        }


        System.out.println("\n--- SUM OF NUMBERS ---");

        int sum = 0;

        for (int j = 1; j <= 10; j++) {
            sum = sum + j;
        }

        System.out.println("Sum: " + sum);



        System.out.println("\n--- MULTIPLICATION TABLE ---");

        int table = 5;

        for (int j = 1; j <= 10; j++) {

            System.out.println(
                    table + " x " + j + " = " + (table * j)
            );
        }


        System.out.println("\n--- REVERSE COUNTING ---");

        for (int j = 10; j >= 1; j--) {
            System.out.println(j);
        }
    }
}