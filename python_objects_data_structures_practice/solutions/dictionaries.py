student = {
    "name": "Akshay",
    "age": 22,
    "course": "Python"
}
print(student["name"])
student["marks"] = 85
student["age"] = 23
for key, value in student.items():
    print(key, value)
