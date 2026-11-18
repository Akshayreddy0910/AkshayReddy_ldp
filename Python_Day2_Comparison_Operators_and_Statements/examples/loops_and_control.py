print("For loop:")
for number in range(1, 6):
    print(number)

print("\nWhile loop:")
count = 1
while count <= 3:
    print(count)
    count += 1

print("\nContinue example:")
for number in range(1, 6):
    if number == 3:
        continue
    print(number)

print("\nBreak example:")
for number in range(1, 6):
    if number == 4:
        break
    print(number)
