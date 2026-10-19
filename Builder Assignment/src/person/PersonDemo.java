package person;

public class PersonDemo {
    public static void main(String[] args) {

        Person person = new PersonBuilder()
                .setFirstName("Akshay")
                .setLastName("Reddy")
                .setAge(21)
                .setAddress("MG Road")
                .setCity("Guntur")
                .setState("Andhra Pradesh")
                .setCountry("India")
                .setPhoneNumber("9876543210")
                .setEmail("akshay@example.com")
                .setOccupation("Student")
                .build();

        System.out.println("=== Person Using Builder ===");
        person.displayDetails();

        PersonWithSetters mutablePerson = new PersonWithSetters();

        mutablePerson.setFirstName("Akshay");
        mutablePerson.setLastName("Reddy");
        mutablePerson.setAge(21);
        mutablePerson.setAddress("MG Road");
        mutablePerson.setCity("Guntur");
        mutablePerson.setState("Andhra Pradesh");
        mutablePerson.setCountry("India");
        mutablePerson.setPhoneNumber("9876543210");
        mutablePerson.setEmail("akshay@example.com");
        mutablePerson.setOccupation("Student");

        System.out.println("\n=== Person Using Setters ===");
        mutablePerson.displayDetails();

        mutablePerson.setAge(22);

        System.out.println("\nAfter modifying age:");
        mutablePerson.displayDetails();
    }
}