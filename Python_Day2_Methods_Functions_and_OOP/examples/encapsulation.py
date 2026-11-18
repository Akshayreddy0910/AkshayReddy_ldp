class BankAccount:
    def __init__(self, balance):
        self._balance = balance

    def deposit(self, amount):
        if amount > 0:
            self._balance += amount

    def get_balance(self):
        return self._balance


account = BankAccount(100)
account.deposit(50)

print("Current balance:", account.get_balance())
