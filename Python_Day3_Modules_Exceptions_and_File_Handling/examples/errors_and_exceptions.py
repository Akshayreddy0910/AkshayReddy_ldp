try:
    number = int(input("Enter a number: "))
    print("Number:", number)
except ValueError:
    print("Please enter a valid integer.")
else:
    print("Input accepted.")
finally:
    print("Program finished.")
