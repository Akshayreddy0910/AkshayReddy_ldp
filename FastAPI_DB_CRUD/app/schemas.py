from pydantic import BaseModel, ConfigDict, Field

class StudentCreate(BaseModel):
    name: str = Field(min_length=1)
    age: int = Field(gt=0)
    course: str = Field(min_length=1)
    email: str | None = None

class StudentUpdate(BaseModel):
    name: str | None = Field(default=None, min_length=1)
    age: int | None = Field(default=None, gt=0)
    course: str | None = Field(default=None, min_length=1)
    email: str | None = None

class StudentResponse(BaseModel):
    id: int
    name: str
    age: int
    course: str
    email: str | None = None
    model_config = ConfigDict(from_attributes=True)
