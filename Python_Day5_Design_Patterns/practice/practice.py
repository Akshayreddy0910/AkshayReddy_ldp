# 1. Singleton Pattern
print("\n1. SINGLETON PATTERN")

class AppSettings:
    _instance = None

    def __new__(cls):
        if cls._instance is None:
            cls._instance = super().__new__(cls)
        return cls._instance

settings_one = AppSettings()
settings_two = AppSettings()
print("Same settings object:", settings_one is settings_two)


# 2. Factory Method (simple factory example)
print("\n2. FACTORY PATTERN")

class PDFReport:
    def generate(self):
        print("Generating PDF report")


class CSVReport:
    def generate(self):
        print("Generating CSV report")


def report_factory(report_type):
    if report_type == "pdf":
        return PDFReport()
    if report_type == "csv":
        return CSVReport()
    raise ValueError("Unsupported report type")

report_factory("csv").generate()


# 3. Builder Pattern
print("\n3. BUILDER PATTERN")

class Laptop:
    def __init__(self):
        self.processor = None
        self.memory = None
        self.storage = None

    def __str__(self):
        return f"Laptop({self.processor}, {self.memory}, {self.storage})"


class LaptopBuilder:
    def __init__(self):
        self.laptop = Laptop()

    def set_processor(self, value):
        self.laptop.processor = value
        return self

    def set_memory(self, value):
        self.laptop.memory = value
        return self

    def set_storage(self, value):
        self.laptop.storage = value
        return self

    def build(self):
        return self.laptop

laptop = (LaptopBuilder().set_processor("Intel i5")
          .set_memory("8 GB").set_storage("512 GB SSD").build())
print(laptop)


# 4. Prototype Pattern
print("\n4. PROTOTYPE PATTERN")
import copy

class Profile:
    def __init__(self, name, skills):
        self.name = name
        self.skills = skills

original_profile = Profile("Asha", ["Python", "SQL"])
copied_profile = copy.deepcopy(original_profile)
copied_profile.name = "Ravi"
copied_profile.skills.append("Java")
print("Original:", original_profile.name, original_profile.skills)
print("Copy:", copied_profile.name, copied_profile.skills)


# 5. Abstract Factory Pattern
print("\n5. ABSTRACT FACTORY PATTERN")

class LightButton:
    def render(self):
        print("Light theme button")


class LightCheckbox:
    def render(self):
        print("Light theme checkbox")


class DarkButton:
    def render(self):
        print("Dark theme button")


class DarkCheckbox:
    def render(self):
        print("Dark theme checkbox")


class LightThemeFactory:
    def create_button(self):
        return LightButton()

    def create_checkbox(self):
        return LightCheckbox()


class DarkThemeFactory:
    def create_button(self):
        return DarkButton()

    def create_checkbox(self):
        return DarkCheckbox()


def build_theme(factory):
    factory.create_button().render()
    factory.create_checkbox().render()

build_theme(LightThemeFactory())
build_theme(DarkThemeFactory())
