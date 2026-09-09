public class Mouse extends Rodent {

    public Mouse() {
        System.out.println("Mouse constructor");
    }

    @Override
    public void eat() {
        System.out.println("Mouse eats");
    }

    @Override
    public void move() {
        System.out.println("Mouse moves");
    }
}