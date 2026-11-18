class Employee:
    def __init__(self, name):
        self.name = name

    def display_name(self):
        print("Employee:", self.name)


class Developer(Employee):
    def __init__(self, name, language):
        super().__init__(name)
        self.language = language

    def display_language(self):
        print("Programming language:", self.language)


developer = Developer("Akshay", "Python")
developer.display_name()
developer.display_language()
