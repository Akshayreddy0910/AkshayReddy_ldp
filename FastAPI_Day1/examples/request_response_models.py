from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class StudentRequest(BaseModel):
    name: str
    age: int
    course: str

class StudentResponse(BaseModel):
    name: str
    course: str
    message: str

@app.post("/students", response_model=StudentResponse)
def create_student(student: StudentRequest):
    return {
        "name": student.name,
        "course": student.course,
        "message": "Student received successfully"
    }
