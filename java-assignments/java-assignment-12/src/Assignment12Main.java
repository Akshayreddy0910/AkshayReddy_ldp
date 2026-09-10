import java.util.List;

public class Assignment12Main {

    public static void main(String[] args) {

        List<Student> students = StudentData.getStudents();

        System.out.println("1. Departments:");
        StudentService.printDepartments(students);

        System.out.println("\n2. Students enrolled after 2018:");
        StudentService.printStudentsAfter2018(students);

        System.out.println("\n3. Male students in Computer Science:");
        StudentService.printMaleComputerScienceStudents(students);

        System.out.println("\n4. Male and female student count:");
        StudentService.printMaleAndFemaleCount(students);

        System.out.println("\n5. Average age by gender:");
        StudentService.printAverageAgeByGender(students);

        System.out.println("\n6. Student with highest percentage:");
        StudentService.printHighestPercentageStudent(students);

        System.out.println("\n7. Student count by department:");
        StudentService.printStudentCountByDepartment(students);

        System.out.println("\n8. Average percentage by department:");
        StudentService.printAveragePercentageByDepartment(students);

        System.out.println("\n9. Youngest student in Electronic department:");
        StudentService.printYoungestElectronicStudent(students);

        System.out.println("\n10. Gender count in Computer Science:");
        StudentService.printGenderCountInComputerScience(students);
    }
}