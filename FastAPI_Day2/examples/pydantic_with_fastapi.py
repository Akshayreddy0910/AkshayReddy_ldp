from fastapi import FastAPI
from pydantic import BaseModel, Field

app = FastAPI()

class EmployeeRequest(BaseModel):
    name: str
    age: int = Field(gt=0)
    department: str
    email: str | None = None

class EmployeeResponse(BaseModel):
    name: str
    department: str
    message: str

@app.post("/employees", response_model=EmployeeResponse)
def create_employee(employee: EmployeeRequest):
    return {
        "name": employee.name,
        "department": employee.department,
        "message": "Employee details received"
    }
