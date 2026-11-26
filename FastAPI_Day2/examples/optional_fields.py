from pydantic import BaseModel

class User(BaseModel):
    username: str
    email: str | None = None
    age: int | None = None

user1 = User(username="anu")
user2 = User(username="rahul", email="rahul@example.com", age=22)

print(user1)
print(user2)
