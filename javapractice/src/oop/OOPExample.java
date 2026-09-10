package oop;

class Person {

    private String name;
    private int age;

    Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public void display() {
        System.out.println("Name: " + name);
        System.out.println("Age: " + age);
    }

    public void work() {
        System.out.println("Person is working");
    }
}

class Student extends Person {

    Student(String name, int age) {
        super(name, age);
    }

    @Override
    public void work() {
        System.out.println("Student is studying");
    }
}

public class OOPExample {

    public static void main(String[] args) {

        Student student = new Student("Akshay", 22);

        student.display();
        student.work();

        Person person = new Student("Rahul", 21);
        person.work();
    }
}