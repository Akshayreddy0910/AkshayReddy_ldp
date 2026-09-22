public class InstanceExample {

    int number;

    InstanceExample(int number) {
        this.number = number;
    }

    public void printNumber() {
        System.out.println("Number: " + number);
    }

    public static void main(String[] args) {

        InstanceExample first = new InstanceExample(10);
        InstanceExample second = new InstanceExample(20);

        first.printNumber();
        second.printNumber();
    }
}