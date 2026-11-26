from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def home():
    return {"message": "FastAPI Day 2 practice"}

@app.get("/students/{student_id}")
def get_student(student_id: int):
    return {
        "student_id": student_id,
        "message": "Student details requested"
    }

@app.get("/products/{product_id}/reviews/{review_id}")
def get_review(product_id: int, review_id: int):
    return {
        "product_id": product_id,
        "review_id": review_id
    }
