public class InnerClassExample {

    class FirstInner {

        FirstInner(String message) {
            System.out.println(message);
        }

        void show() {
            System.out.println("First inner class");
        }
    }

    class SecondInner extends FirstInner {

        SecondInner(String message) {
            super(message);
        }

        void showSecond() {
            System.out.println("Second inner class");
        }
    }

    public static void main(String[] args) {

        InnerClassExample outer = new InnerClassExample();

        SecondInner inner = outer.new SecondInner("Inner class constructor");

        inner.show();
        inner.showSecond();
    }
}