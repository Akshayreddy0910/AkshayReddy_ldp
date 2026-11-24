"""Combined practice: sensitive data and advanced Python objects."""

# 1. Load configuration safely from .env
import os
from dotenv import load_dotenv

load_dotenv()
app_name = os.getenv("APP_NAME", "DefaultApp")
api_key = os.getenv("API_KEY")

print("\n1. ENVIRONMENT CONFIGURATION")
print("Application:", app_name)
print("API key configured:", bool(api_key and api_key != "replace_with_your_test_key"))

# 2. Object identity and mutability
import copy

print("\n2. OBJECT IDENTITY AND COPYING")
items = [[10, 20], [30, 40]]
same_reference = items
shallow = copy.copy(items)
deep = copy.deepcopy(items)
items[0].append(50)
print("Original:", items)
print("Same reference:", same_reference)
print("Shallow copy:", shallow)
print("Deep copy:", deep)

# 3. Dataclass
from dataclasses import dataclass

print("\n3. DATACLASS")
@dataclass
class Product:
    name: str
    price: float

product = Product("Keyboard", 1200.0)
print(product)

# 4. Property, class method, static method, and __str__
print("\n4. CLASS FEATURES")
class Employee:
    company = "ABC Technologies"

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
    def set_company(cls, name):
        cls.company = name

    @staticmethod
    def is_weekend(day):
        return day.lower() in ("saturday", "sunday")

    def __str__(self):
        return f"{self.name} - {self.company}"

employee = Employee("Ravi", 30000)
employee.salary = 32000
print(employee)
print("Salary:", employee.salary)
print("Is Sunday a weekend?", Employee.is_weekend("Sunday"))
Employee.set_company("XYZ Technologies")
print(employee)
