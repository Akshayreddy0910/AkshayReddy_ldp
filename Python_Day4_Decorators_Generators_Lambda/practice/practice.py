# 1. Basic decorator
print("1. Basic Decorator")

def show_message(func):
    def wrapper():
        print("Starting function")
        func()
        print("Ending function")
    return wrapper

@show_message
def welcome():
    print("Welcome to Python")

welcome()


# 2. Decorator that accepts function arguments
print("\n2. Decorator with Function Arguments")

def announce(func):
    def wrapper(name):
        print("Greeting message:")
        return func(name)
    return wrapper

@announce
def greet(name):
    print("Hello", name)

greet("Akshay")


# 3. Basic generator using yield
print("\n3. Generator")

def generate_numbers(limit):
    number = 1
    while number <= limit:
        yield number
        number += 1

for value in generate_numbers(5):
    print(value)


# 4. Generator expression
print("\n4. Generator Expression")

squares = (number * number for number in range(1, 6))

for square in squares:
    print(square)


# 5. Lambda function
print("\n5. Lambda Function")

add = lambda first, second: first + second
print("Sum:", add(10, 20))


# 6. Lambda with map()
print("\n6. map() with Lambda")

numbers = [1, 2, 3, 4, 5]
doubled = list(map(lambda number: number * 2, numbers))
print("Doubled numbers:", doubled)


# 7. Lambda with filter()
print("\n7. filter() with Lambda")

even_numbers = list(filter(lambda number: number % 2 == 0, numbers))
print("Even numbers:", even_numbers)


# 8. Lambda with sorted()
print("\n8. sorted() with Lambda")

students = [("Ravi", 75), ("Akshay", 90), ("Priya", 82)]
sorted_students = sorted(students, key=lambda student: student[1])

print("Students sorted by marks:")
for student in sorted_students:
    print(student)
