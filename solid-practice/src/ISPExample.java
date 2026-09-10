interface Printer {
    void print();
}

interface Scanner {
    void scan();
}

class SimplePrinter implements Printer {
    public void print() {
        System.out.println("Printing document");
    }
}

class MultiFunctionPrinter implements Printer, Scanner {
    public void print() {
        System.out.println("Printing document");
    }

    public void scan() {
        System.out.println("Scanning document");
    }
}

public class ISPExample {
    public static void main(String[] args) {
        SimplePrinter printer = new SimplePrinter();
        printer.print();

        MultiFunctionPrinter multiPrinter = new MultiFunctionPrinter();
        multiPrinter.print();
        multiPrinter.scan();
    }
}