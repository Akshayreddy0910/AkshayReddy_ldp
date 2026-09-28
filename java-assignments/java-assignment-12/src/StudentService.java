import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

public class StudentService {

    public static void printDepartments(List<Student> students) {

        students.stream()
                .map(Student::getEngDepartment)
                .distinct()
                .forEach(System.out::println);
    }

    public static void printStudentsAfter2018(List<Student> students) {

        students.stream()
                .filter(student -> student.getYearOfEnrollment() > 2018)
                .map(Student::getName)
                .forEach(System.out::println);
    }

    public static void printMaleComputerScienceStudents(List<Student> students) {

        students.stream()
                .filter(student -> student.getGender().equals("Male"))
                .filter(student -> student.getEngDepartment().equals("Computer Science"))
                .forEach(System.out::println);
    }

    public static void printMaleAndFemaleCount(List<Student> students) {

        Map<String, Long> result = students.stream()
                .collect(Collectors.groupingBy(
                        Student::getGender,
                        Collectors.counting()
                ));

        System.out.println(result);
    }

    public static void printAverageAgeByGender(List<Student> students) {

        Map<String, Double> result = students.stream()
                .collect(Collectors.groupingBy(
                        Student::getGender,
                        Collectors.averagingInt(Student::getAge)
                ));

        System.out.println(result);
    }

    public static void printHighestPercentageStudent(List<Student> students) {

        students.stream()
                .max((student1, student2) ->
                        Double.compare(
                                student1.getPerTillDate(),
                                student2.getPerTillDate()
                        )
                )
                .ifPresent(System.out::println);
    }

    public static void printStudentCountByDepartment(List<Student> students) {

        Map<String, Long> result = students.stream()
                .collect(Collectors.groupingBy(
                        Student::getEngDepartment,
                        Collectors.counting()
                ));

        System.out.println(result);
    }

    public static void printAveragePercentageByDepartment(List<Student> students) {

        Map<String, Double> result = students.stream()
                .collect(Collectors.groupingBy(
                        Student::getEngDepartment,
                        Collectors.averagingDouble(Student::getPerTillDate)
                ));

        System.out.println(result);
    }

    public static void printYoungestElectronicStudent(List<Student> students) {

        students.stream()
                .filter(student ->
                        student.getEngDepartment().equals("Electronic"))
                .min((student1, student2) ->
                        Integer.compare(
                                student1.getAge(),
                                student2.getAge()
                        )
                )
                .ifPresent(System.out::println);
    }

    public static void printGenderCountInComputerScience(
            List<Student> students) {

        Map<String, Long> result = students.stream()
                .filter(student ->
                        student.getEngDepartment().equals("Computer Science"))
                .collect(Collectors.groupingBy(
                        Student::getGender,
                        Collectors.counting()
                ));

        System.out.println(result);
    }
}