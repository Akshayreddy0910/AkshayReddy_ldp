"""Use a dataclass to store related data."""
from dataclasses import dataclass

@dataclass
class Student:
    name: str
    marks: int
    department: str

student = Student("Anu", 88, "CSE")
print(student)
print("Name:", student.name)
