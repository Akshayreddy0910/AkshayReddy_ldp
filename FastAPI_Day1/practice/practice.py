from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI(title="FastAPI Day 1 Practice")

class StudentRequest(BaseModel):
    name: str
    age: int
    course: str

class StudentResponse(BaseModel):
    name: str
    course: str
    message: str

@app.get("/")
def home():
    return {"message": "Welcome to FastAPI Day 1"}

@app.get("/about")
def about():
    return {"topic": "Introduction to FastAPI and Models"}

@app.post("/students", response_model=StudentResponse)
def create_student(student: StudentRequest):
    return {
        "name": student.name,
        "course": student.course,
        "message": "Student received successfully"
    }
