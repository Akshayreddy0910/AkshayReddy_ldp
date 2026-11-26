from pydantic import BaseModel, Field

class Student(BaseModel):
    name: str = Field(description="Student full name")
    age: int = Field(gt=0, description="Student age")
    course: str

# Generate the JSON Schema that describes this model.
student_schema = Student.model_json_schema()
print(student_schema)
