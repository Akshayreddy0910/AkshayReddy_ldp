
package usecases;

public class EmployeeBuilder {

    private String name;
    private int age;
    private String department = "Unassigned";
    private String email = "Not provided";

    public EmployeeBuilder setName(String name) {
        this.name = name;
        return this;
    }

    public EmployeeBuilder setAge(int age) {
        this.age = age;
        return this;
    }

    public EmployeeBuilder setDepartment(String department) {
        this.department = department;
        return this;
    }

    public EmployeeBuilder setEmail(String email) {
        this.email = email;
        return this;
    }

    public Employee build() {
        if (name == null || name.isBlank()) {
            throw new IllegalStateException("Employee name is required");
        }

        if (age <= 0) {
            throw new IllegalStateException("Age must be positive");
        }

        return new Employee(name, age, department, email);
    }
}
