package arrays;

import java.util.Arrays;

public class ArrayExample {

    public static void main(String[] args) {

        // 1. Creating an array
        int[] numbers = {10, 20, 30, 40, 50};

        System.out.println("First element: " + numbers[0]);
        System.out.println("Array length: " + numbers.length);


        // 2. Traversing an array
        System.out.println("Array elements:");

        for (int number : numbers) {
            System.out.println(number);
        }


        // 3. Changing an element
        numbers[2] = 35;

        System.out.println("After changing: " + numbers[2]);


        // 4. Sorting an array
        int[] marks = {70, 40, 90, 60, 80};

        Arrays.sort(marks);

        System.out.println("Sorted array: " + Arrays.toString(marks));


        // 5. Searching
        int[] values = {10, 20, 30, 40, 50};

        int search = 30;

        for (int i = 0; i < values.length; i++) {

            if (values[i] == search) {
                System.out.println("Found at index: " + i);
            }
        }


        // 6. Two-dimensional array
        int[][] matrix = {
                {1, 2},
                {3, 4}
        };

        System.out.println("2D Array:");

        for (int i = 0; i < matrix.length; i++) {

            for (int j = 0; j < matrix[i].length; j++) {
                System.out.print(matrix[i][j] + " ");
            }

            System.out.println();
        }
    }
}