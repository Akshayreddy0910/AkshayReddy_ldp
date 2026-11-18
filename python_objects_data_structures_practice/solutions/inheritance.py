class Person:
    def __init__(self, name):
        self.name = name

    def introduce(self):
        print(f"My name is {self.name}")


class Student(Person):
    def study(self):
        print("I am studying Python")


student = Student("Akshay")
student.introduce()
student.study()
