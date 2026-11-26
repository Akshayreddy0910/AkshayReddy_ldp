from pydantic import BaseModel

class Employee(BaseModel):
    name: str
    age: int
    salary: float
    department: str

employee = Employee(
    name="Anu",
    age=22,
    salary=25000,
    department="IT"
)

print(employee)
print("Employee name:", employee.name)
print("Employee salary:", employee.salary)
