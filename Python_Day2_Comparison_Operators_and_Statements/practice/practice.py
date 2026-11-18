# 1. Comparison operators
print("1. Comparison Operators")
first = 15
second = 20

print("Equal:", first == second)
print("Not equal:", first != second)
print("Greater than:", first > second)
print("Less than:", first < second)
print("Greater than or equal:", first >= second)
print("Less than or equal:", first <= second)


# 2. Logical operators
print("\n2. Logical Operators")
age = 22

print("Eligible to vote:", age >= 18)
print("Age between 18 and 60:", age >= 18 and age <= 60)
print("Under 18 or over 60:", age < 18 or age > 60)
print("Not equal to 22:", not age == 22)


# 3. if, elif and else
print("\n3. Conditional Statements")
marks = 68

if marks >= 90:
    print("Grade: A")
elif marks >= 75:
    print("Grade: B")
elif marks >= 50:
    print("Grade: C")
else:
    print("Grade: Fail")


# 4. for loop
print("\n4. For Loop")
for number in range(1, 6):
    print(number)


# 5. while loop
print("\n5. While Loop")
count = 5

while count >= 1:
    print(count)
    count -= 1


# 6. continue skips the current iteration
print("\n6. Continue Statement")
for number in range(1, 6):
    if number == 3:
        continue
    print(number)


# 7. break exits the loop
print("\n7. Break Statement")
for number in range(1, 6):
    if number == 4:
        break
    print(number)


# 8. pass is a placeholder and does nothing
print("\n8. Pass Statement")
is_ready = True

if is_ready:
    pass

print("Program continues")
