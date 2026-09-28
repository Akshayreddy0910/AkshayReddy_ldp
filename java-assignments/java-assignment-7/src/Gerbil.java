public class Gerbil extends Rodent {

    public Gerbil() {
        System.out.println("Gerbil constructor");
    }

    @Override
    public void eat() {
        System.out.println("Gerbil eats");
    }

    @Override
    public void move() {
        System.out.println("Gerbil moves");
    }
}