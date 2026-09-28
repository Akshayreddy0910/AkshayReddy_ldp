public class ExceptionExample {

    public static void throwExceptions(int choice)
            throws FirstException, SecondException, ThirdException {

        if (choice == 1) {
            throw new FirstException("First exception");
        }

        if (choice == 2) {
            throw new SecondException("Second exception");
        }

        if (choice == 3) {
            throw new ThirdException("Third exception");
        }

        String value = null;
        value.length();
    }

    public static void main(String[] args) {

        try {
            throwExceptions(1);
        } catch (FirstException | SecondException | ThirdException | NullPointerException e) {
            System.out.println(e.getMessage());
        } finally {
            System.out.println("Finally block executed");
        }

        try {
            throwExceptions(0);
        } catch (FirstException | SecondException | ThirdException | NullPointerException e) {
            System.out.println(e.getMessage());
        } finally {
            System.out.println("Finally block executed");
        }
    }
}