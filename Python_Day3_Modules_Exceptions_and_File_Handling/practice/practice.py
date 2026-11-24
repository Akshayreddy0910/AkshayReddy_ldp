# 1. Modules
print("1. Modules")
import math
import random

print("Square root of 64:", math.sqrt(64))
print("Random number:", random.randint(1, 10))


# 2. Custom function example
print("\n2. Custom Module Function")
def calculate_total(price, quantity):
    return price * quantity

print("Total:", calculate_total(100, 3))


# 3. Exception handling
print("\n3. Exception Handling")
try:
    number = int("25")
    result = 100 / number
    print("Result:", result)
except ValueError:
    print("Invalid number")
except ZeroDivisionError:
    print("Cannot divide by zero")
else:
    print("Calculation completed")
finally:
    print("Example finished")


# 4. Handling invalid values
print("\n4. Handling Invalid Input")
user_value = "hello"

try:
    converted_value = int(user_value)
    print("Converted value:", converted_value)
except ValueError:
    print("The value cannot be converted to an integer")


# 5. Write to a file
print("\n5. Writing to a File")
with open("practice_output.txt", "w", encoding="utf-8") as file:
    file.write("Python Day 3 Practice\n")
    file.write("Learning file handling.")

print("Data written to practice_output.txt")


# 6. Read from a file
print("\n6. Reading from a File")
with open("practice_output.txt", "r", encoding="utf-8") as file:
    content = file.read()

print("File content:")
print(content)


# 7. Append to a file
print("\n7. Appending to a File")
with open("practice_output.txt", "a", encoding="utf-8") as file:
    file.write("\nPractising modules, exceptions and files.")

with open("practice_output.txt", "r", encoding="utf-8") as file:
    print(file.read())
