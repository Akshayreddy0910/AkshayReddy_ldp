package basics;

import java.util.Scanner;

public class Basics {

    public static void main(String[] args) {

        int age = 20;
        double salary = 20000.50;
        float height = 5.9f;
        long population = 1400000000L;
        char grade = 'A';
        boolean isWorking = true;
        String name = "Akshay";

        System.out.println("Name: " + name);
        System.out.println("Age: " + age);
        System.out.println("Salary: " + salary);
        System.out.println("Height: " + height);
        System.out.println("Population: " + population);
        System.out.println("Grade: " + grade);
        System.out.println("Working: " + isWorking);

        int a = 20;
        int b = 10;

        System.out.println("\n--- Arithmetic Operators ---");

        System.out.println("Addition: " + (a + b));
        System.out.println("Subtraction: " + (a - b));
        System.out.println("Multiplication: " + (a * b));
        System.out.println("Division: " + (a / b));
        System.out.println("Remainder: " + (a % b));


        System.out.println("\n--- Comparison Operators ---");

        System.out.println("a > b: " + (a > b));
        System.out.println("a < b: " + (a < b));
        System.out.println("a >= b: " + (a >= b));
        System.out.println("a <= b: " + (a <= b));
        System.out.println("a == b: " + (a == b));
        System.out.println("a != b: " + (a != b));

        boolean x = true;
        boolean y = false;

        System.out.println("\n--- Logical Operators ---");

        System.out.println("AND: " + (x && y));
        System.out.println("OR: " + (x || y));
        System.out.println("NOT: " + (!x));


        System.out.println("\n--- Assignment Operators ---");

        int number = 10;

        number += 5;
        System.out.println("After += 5: " + number);

        number -= 3;
        System.out.println("After -= 3: " + number);

        number *= 2;
        System.out.println("After *= 2: " + number);

        number /= 4;
        System.out.println("After /= 4: " + number);



        System.out.println("\n--- Increment / Decrement ---");

        int count = 5;

        count++;
        System.out.println("After increment: " + count);

        count--;
        System.out.println("After decrement: " + count);


        System.out.println("\n--- If / Else ---");

        int studentAge = 20;

        if (studentAge >= 18) {
            System.out.println("Student is an adult");
        } else {
            System.out.println("Student is a minor");
        }

        System.out.println("\n--- Else If ---");

        int marks = 75;

        if (marks >= 90) {
            System.out.println("Grade A");
        } else if (marks >= 75) {
            System.out.println("Grade B");
        } else if (marks >= 50) {
            System.out.println("Grade C");
        } else {
            System.out.println("Fail");
        }

        System.out.println("\n--- Nested If ---");

        int ageForVote = 20;
        boolean hasVoterId = true;

        if (ageForVote >= 18) {

            if (hasVoterId) {
                System.out.println("You can vote");
            } else {
                System.out.println("You need a voter ID");
            }

        } else {
            System.out.println("You are not eligible to vote");
        }



        System.out.println("\n--- Switch ---");

        int day = 2;

        switch (day) {

            case 1:
                System.out.println("Monday");
                break;

            case 2:
                System.out.println("Tuesday");
                break;

            case 3:
                System.out.println("Wednesday");
                break;

            case 4:
                System.out.println("Thursday");
                break;

            default:
                System.out.println("Invalid day");
        }



        System.out.println("\n--- Type Casting ---");

        // Widening: smaller type → larger type
        int intValue = 100;
        double doubleValue = intValue;

        System.out.println("Integer: " + intValue);
        System.out.println("Double: " + doubleValue);

        // Narrowing: larger type → smaller type
        double price = 99.99;
        int wholePrice = (int) price;

        System.out.println("Double: " + price);
        System.out.println("Integer after casting: " + wholePrice);


        System.out.println("\n--- User Input ---");

        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter your name: ");
        String userName = scanner.nextLine();

        System.out.print("Enter your age: ");
        int userAge = scanner.nextInt();

        System.out.print("Enter your salary: ");
        double userSalary = scanner.nextDouble();

        System.out.println("\nUser Details:");
        System.out.println("Name: " + userName);
        System.out.println("Age: " + userAge);
        System.out.println("Salary: " + userSalary);

        scanner.close();
    }
}