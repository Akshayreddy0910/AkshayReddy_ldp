package packages;

public class PackagesExample {

    public static void main(String[] args) {

        Student student = new Student();

        student.name = "Akshay";
        student.display();
    }
}

class Student {

    public String name;

    public void display() {
        System.out.println("Student name: " + name);
    }
}