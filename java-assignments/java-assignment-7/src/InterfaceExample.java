public class InterfaceExample extends BaseClass implements CombinedInterface {

    @Override
    public void methodOne() {
        System.out.println("Method One");
    }

    @Override
    public void methodTwo() {
        System.out.println("Method Two");
    }

    @Override
    public void methodThree() {
        System.out.println("Method Three");
    }

    @Override
    public void methodFour() {
        System.out.println("Method Four");
    }

    @Override
    public void methodFive() {
        System.out.println("Method Five");
    }

    @Override
    public void methodSix() {
        System.out.println("Method Six");
    }

    @Override
    public void methodSeven() {
        System.out.println("Method Seven");
    }

    public static void main(String[] args) {

        InterfaceExample object = new InterfaceExample();

        acceptInterfaceOne(object);
        acceptInterfaceTwo(object);
        acceptInterfaceThree(object);
        acceptCombinedInterface(object);
    }

    public static void acceptInterfaceOne(InterfaceOne object) {
        object.methodOne();
        object.methodTwo();
    }

    public static void acceptInterfaceTwo(InterfaceTwo object) {
        object.methodThree();
        object.methodFour();
    }

    public static void acceptInterfaceThree(InterfaceThree object) {
        object.methodFive();
        object.methodSix();
    }

    public static void acceptCombinedInterface(CombinedInterface object) {
        object.methodOne();
        object.methodThree();
        object.methodFive();
        object.methodSeven();
    }
}

class BaseClass {
}