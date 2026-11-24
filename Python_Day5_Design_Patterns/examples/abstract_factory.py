"""Abstract Factory: create related objects through a family factory."""
class WindowsButton:
    def render(self):
        print("Rendering Windows button")


class WindowsCheckbox:
    def render(self):
        print("Rendering Windows checkbox")


class MacButton:
    def render(self):
        print("Rendering Mac button")


class MacCheckbox:
    def render(self):
        print("Rendering Mac checkbox")


class WindowsFactory:
    def create_button(self):
        return WindowsButton()

    def create_checkbox(self):
        return WindowsCheckbox()


class MacFactory:
    def create_button(self):
        return MacButton()

    def create_checkbox(self):
        return MacCheckbox()


def create_ui(factory):
    button = factory.create_button()
    checkbox = factory.create_checkbox()
    button.render()
    checkbox.render()


create_ui(WindowsFactory())
print("---")
create_ui(MacFactory())
