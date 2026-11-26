from fastapi import FastAPI, Query

app = FastAPI()

@app.get("/items")
def get_items(
    category: str | None = None,
    skip: int = Query(default=0, ge=0),
    limit: int = Query(default=10, ge=1, le=50)
):
    return {
        "category": category,
        "skip": skip,
        "limit": limit,
        "message": "Query parameters received"
    }
