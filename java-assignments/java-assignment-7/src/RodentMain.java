public class RodentMain {

    public static void main(String[] args) {

        Rodent[] rodents = {
                new Mouse(),
                new Gerbil(),
                new Hamster()
        };

        for (Rodent rodent : rodents) {
            rodent.eat();
            rodent.move();
            System.out.println();
        }
    }
}