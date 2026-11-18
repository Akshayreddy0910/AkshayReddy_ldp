numbers = [1, 2, 3, 4, 5]
squares = [number ** 2 for number in numbers]
even_numbers = [number for number in numbers if number % 2 == 0]
print(squares)
print(even_numbers)
