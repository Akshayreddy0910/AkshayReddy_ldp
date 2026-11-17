class Dog:
    def speak(self):
        print("Dog says: Woof")


class Cat:
    def speak(self):
        print("Cat says: Meow")


animals = [Dog(), Cat()]

for animal in animals:
    animal.speak()
