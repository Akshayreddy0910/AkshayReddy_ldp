# 1. Function with parameters and return value
print("1. Function")

def multiply(first, second):
    return first * second

result = multiply(6, 7)
print("Product:", result)


# 2. Function with a default argument
print("\n2. Default Argument")

def greet(name, message="Welcome"):
    print(message, name)

greet("Akshay")
greet("Ravi", "Good morning")


# 3. Method inside a class
print("\n3. Methods")

class Calculator:
    def add(self, first, second):
        return first + second

    def subtract(self, first, second):
        return first - second

calculator = Calculator()
print("Addition:", calculator.add(15, 5))
print("Subtraction:", calculator.subtract(15, 5))


# 4. Class, objects and instance attributes
print("\n4. Class and Objects")

class Student:
    school = "Northstar School"

    def __init__(self, name, age):
        self.name = name
        self.age = age

    def display(self):
        print("Name:", self.name)
        print("Age:", self.age)
        print("School:", self.school)

student_one = Student("Akshay", 22)
student_two = Student("Ravi", 21)

student_one.display()
print()
student_two.display()


# 5. Encapsulation
print("\n5. Encapsulation")

class BankAccount:
    def __init__(self, balance):
        self._balance = balance

    def deposit(self, amount):
        if amount > 0:
            self._balance += amount

    def get_balance(self):
        return self._balance

account = BankAccount(100)
account.deposit(50)
print("Current balance:", account.get_balance())


# 6. Inheritance and super()
print("\n6. Inheritance")

class Animal:
    def eat(self):
        print("Animal is eating")

class Dog(Animal):
    def bark(self):
        print("Dog is barking")

dog = Dog()
dog.eat()
dog.bark()


# 7. Polymorphism
print("\n7. Polymorphism")

class Cat:
    def speak(self):
        print("Cat says: Meow")

class Bird:
    def speak(self):
        print("Bird says: Chirp")

animals = [Cat(), Bird()]

for animal in animals:
    animal.speak()
