from pydantic import BaseModel

class Student(BaseModel):
    name: str
    age: int
    course: str

student = Student(name="Anu", age=21, course="CSE")

print(student)
print("Student name:", student.name)
print("Student age:", student.age)
