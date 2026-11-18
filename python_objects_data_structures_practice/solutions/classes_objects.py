class Student:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def display(self):
        print(self.name, self.age)


student_one = Student("Akshay", 22)
student_two = Student("Ravi", 21)

student_one.display()
student_two.display()
