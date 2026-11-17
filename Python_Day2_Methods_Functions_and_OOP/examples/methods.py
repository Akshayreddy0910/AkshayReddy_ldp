class Calculator:
    def add(self, first, second):
        return first + second

    def subtract(self, first, second):
        return first - second


calculator = Calculator()

print("Addition:", calculator.add(20, 10))
print("Subtraction:", calculator.subtract(20, 10))
