class Employee:
    company = "Northstar"

    def __init__(self, name):
        self.name = name

    def display(self):
        print(self.name, self.company)


employee_one = Employee("Akshay")
employee_two = Employee("Ravi")

employee_one.display()
employee_two.display()
