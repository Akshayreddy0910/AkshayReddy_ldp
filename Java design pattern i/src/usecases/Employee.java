
package usecases;

public class Employee {

    private final String name;
    private final int age;
    private final String department;
    private final String email;

    Employee(String name, int age, String department, String email) {
        this.name = name;
        this.age = age;
        this.department = department;
        this.email = email;
    }

    public void display() {
        System.out.println("Employee: " + name);
        System.out.println("Age: " + age);
        System.out.println("Department: " + department);
        System.out.println("Email: " + email);
    }
}
