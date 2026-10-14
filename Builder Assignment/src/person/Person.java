package person;

public class Person {
    private final String firstName;
    private final String lastName;
    private final int age;
    private final String address;
    private final String city;
    private final String state;
    private final String country;
    private final String phoneNumber;
    private final String email;
    private final String occupation;

    public Person(String firstName, String lastName, int age,
                  String address, String city, String state,
                  String country, String phoneNumber,
                  String email, String occupation) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.address = address;
        this.city = city;
        this.state = state;
        this.country = country;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.occupation = occupation;
    }

    public void displayDetails() {
        System.out.println("Name: " + firstName + " " + lastName);
        System.out.println("Age: " + age);
        System.out.println("Address: " + address);
        System.out.println("City: " + city);
        System.out.println("State: " + state);
        System.out.println("Country: " + country);
        System.out.println("Phone: " + phoneNumber);
        System.out.println("Email: " + email);
        System.out.println("Occupation: " + occupation);
    }
}