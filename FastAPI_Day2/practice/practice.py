from fastapi import FastAPI
from pydantic import BaseModel, Field

app = FastAPI()

class BookRequest(BaseModel):
    title: str
    author: str
    price: float = Field(gt=0)
    in_stock: bool = True
    description: str | None = None

class BookResponse(BaseModel):
    title: str
    author: str
    message: str

@app.get("/")
def home():
    return {"message": "Day 2 practice API"}

@app.get("/books/{book_id}")
def get_book(book_id: int):
    return {"book_id": book_id}

@app.post("/books", response_model=BookResponse)
def create_book(book: BookRequest):
    return {
        "title": book.title,
        "author": book.author,
        "message": "Book received successfully"
    }
