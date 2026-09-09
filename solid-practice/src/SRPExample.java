class Student {
    String name;

    Student(String name) {
        this.name = name;
    }

    void displayStudent() {
        System.out.println("Student: " + name);
    }
}

class StudentReport {
    void generateReport(Student student) {
        System.out.println("Generating report for " + student.name);
    }
}

public class SRPExample {
    public static void main(String[] args) {
        Student student = new Student("Akshay");

        student.displayStudent();

        StudentReport report = new StudentReport();
        report.generateReport(student);
    }
}