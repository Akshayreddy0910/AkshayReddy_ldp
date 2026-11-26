from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def home():
    return {"message": "FastAPI is running"}

@app.get("/about")
def about():
    return {"application": "Day 1 FastAPI practice"}

@app.post("/welcome")
def welcome():
    return {"message": "This is a basic POST endpoint"}
