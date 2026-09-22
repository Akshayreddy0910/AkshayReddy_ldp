public class Hamster extends Rodent {

    public Hamster() {
        System.out.println("Hamster constructor");
    }

    @Override
    public void eat() {
        System.out.println("Hamster eats");
    }

    @Override
    public void move() {
        System.out.println("Hamster moves");
    }
}