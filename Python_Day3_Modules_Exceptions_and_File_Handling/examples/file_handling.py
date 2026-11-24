with open("sample.txt", "w", encoding="utf-8") as file:
    file.write("Hello, Python!\n")
    file.write("Learning file handling.")

with open("sample.txt", "r", encoding="utf-8") as file:
    content = file.read()

print("File content:")
print(content)
