numbers = [5, 2, 8, 1, 6]

square = lambda number: number * number
print("Square:", square(4))

print("Sorted:", sorted(numbers))
print("Sorted descending:", sorted(numbers, key=lambda number: number, reverse=True))

doubled = list(map(lambda number: number * 2, numbers))
print("Doubled:", doubled)

even_numbers = list(filter(lambda number: number % 2 == 0, numbers))
print("Even numbers:", even_numbers)
