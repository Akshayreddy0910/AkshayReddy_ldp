class Bird {
    void eat() {
        System.out.println("Bird is eating");
    }
}

class Sparrow extends Bird {
    void fly() {
        System.out.println("Sparrow is flying");
    }
}

public class LSPExample {
    public static void main(String[] args) {
        Bird bird = new Sparrow();

        bird.eat();

        Sparrow sparrow = new Sparrow();
        sparrow.fly();
    }
}