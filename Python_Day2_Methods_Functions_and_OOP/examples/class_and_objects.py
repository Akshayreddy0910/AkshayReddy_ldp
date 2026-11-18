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
