from fastapi import FastAPI
from .database import Base, engine
from . import models
from .routes.students import router as students_router

Base.metadata.create_all(bind=engine)
app = FastAPI(title="FastAPI Day 3–5 Practice")
app.include_router(students_router)

@app.get("/")
def home():
    return {"message": "FastAPI Day 3–5 practice API is running"}
