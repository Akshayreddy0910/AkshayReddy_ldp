from pydantic import BaseModel, Field, ValidationError

class Product(BaseModel):
    name: str
    price: float = Field(gt=0)
    quantity: int = Field(ge=0)

product = Product(name="Keyboard", price=1200, quantity=5)
print(product)

try:
    invalid_product = Product(name="Mouse", price=-10, quantity=-1)
except ValidationError as error:
    print("Validation failed:")
    print(error)
