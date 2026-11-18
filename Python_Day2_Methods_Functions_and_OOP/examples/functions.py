def calculate_total(price, quantity):
    return price * quantity


def greet(name, message="Welcome"):
    print(message, name)


print("Total:", calculate_total(250, 3))
greet("Akshay")
greet("Ravi", "Good morning")
