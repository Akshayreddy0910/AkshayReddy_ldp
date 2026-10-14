package person;

public class PersonBuilder {
    private String firstName;
    private String lastName;
    private int age;
    private String address;
    private String city;
    private String state;
    private String country;
    private String phoneNumber;
    private String email;
    private String occupation;

    public PersonBuilder setFirstName(String firstName) {
        this.firstName = firstName;
        return this;
    }

    public PersonBuilder setLastName(String lastName) {
        this.lastName = lastName;
        return this;
    }

    public PersonBuilder setAge(int age) {
        this.age = age;
        return this;
    }

    public PersonBuilder setAddress(String address) {
        this.address = address;
        return this;
    }

    public PersonBuilder setCity(String city) {
        this.city = city;
        return this;
    }

    public PersonBuilder setState(String state) {
        this.state = state;
        return this;
    }

    public PersonBuilder setCountry(String country) {
        this.country = country;
        return this;
    }

    public PersonBuilder setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
        return this;
    }

    public PersonBuilder setEmail(String email) {
        this.email = email;
        return this;
    }

    public PersonBuilder setOccupation(String occupation) {
        this.occupation = occupation;
        return this;
    }

    public Person build() {
        return new Person(
                firstName, lastName, age, address, city,
                state, country, phoneNumber, email, occupation
        );
    }
}