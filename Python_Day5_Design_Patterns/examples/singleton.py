"""Singleton pattern: reuse one shared instance."""
class DatabaseConnection:
    _instance = None

    def __new__(cls):
        if cls._instance is None:
            cls._instance = super().__new__(cls)
        return cls._instance

    def connect(self):
        print("Database connected")


first = DatabaseConnection()
second = DatabaseConnection()

first.connect()
print("Same instance:", first is second)
