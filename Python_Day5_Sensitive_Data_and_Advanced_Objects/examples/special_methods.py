"""Use properties and common class methods."""
class Employee:
    company = "Tech Solutions"

    def __init__(self, name, salary):
        self.name = name
        self._salary = salary

    @property
    def salary(self):
        return self._salary

    @salary.setter
    def salary(self, amount):
        if amount < 0:
            raise ValueError("Salary cannot be negative")
        self._salary = amount

    @classmethod
    def change_company(cls, new_name):
        cls.company = new_name

    @staticmethod
    def is_workday(day):
        return day.lower() not in ("saturday", "sunday")

    def __str__(self):
        return f"{self.name} works at {self.company}"

employee = Employee("Ravi", 30000)
employee.salary = 35000
print(employee)
print("Salary:", employee.salary)
print("Is Monday a workday?", Employee.is_workday("Monday"))
Employee.change_company("Open Tech")
print(employee)
