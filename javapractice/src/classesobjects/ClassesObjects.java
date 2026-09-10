package classesobjects;

class Student {

    String name;
    int age;

    Student(String name, int age) {
        this.name = name;
        this.age = age;
    }

    void displayDetails() {
        System.out.println("Name: " + name);
        System.out.println("Age: " + age);
    }
}


public class ClassesObjects {

    public static void main(String[] args) {

        Student student1 = new Student("Akshay", 20);
        Student student2 = new Student("Rahul", 21);

        student1.displayDetails();
        System.out.println();

        student2.displayDetails();
    }
}