"""Prototype: create a new object by copying an existing one."""
import copy


class Document:
    def __init__(self, title, sections):
        self.title = title
        self.sections = sections

    def show(self):
        print("Title:", self.title)
        print("Sections:", self.sections)


original = Document("Python Basics", ["Variables", "Functions"])
duplicate = copy.deepcopy(original)
duplicate.title = "Python Advanced"
duplicate.sections.append("Decorators")

print("Original document:")
original.show()

print("Copied document:")
duplicate.show()
