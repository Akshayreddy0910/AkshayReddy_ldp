def count_up_to(limit):
    number = 1

    while number <= limit:
        yield number
        number += 1


for value in count_up_to(5):
    print(value)
