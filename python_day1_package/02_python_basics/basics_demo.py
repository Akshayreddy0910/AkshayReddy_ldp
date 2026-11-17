def calculate_total(price: float, quantity: int) -> float:
    """Return the total price for the requested quantity."""
    return price * quantity


def write_and_read_file() -> None:
    """Write a short message to a file and read it back."""
    file_name = "sample_data.txt"

    with open(file_name, "w", encoding="utf-8") as output_file:
        output_file.write("Learning Python file handling.")

    with open(file_name, "r", encoding="utf-8") as input_file:
        content = input_file.read()

    print(f"File content: {content}")


def main() -> None:
    # Variables and basic data types
    learner_name = "Akshay"
    learner_age = 22
    average_score = 8.58
    is_learning = True

    print(f"Name: {learner_name}")
    print(f"Age: {learner_age}")
    print(f"Score: {average_score}")
    print(f"Currently learning: {is_learning}")

    # Numbers and operators
    first_number = 10
    second_number = 3
    print(f"Addition: {first_number + second_number}")
    print(f"Floor division: {first_number // second_number}")
    print(f"Remainder: {first_number % second_number}")
    print(f"Power: {first_number ** second_number}")

    # Strings
    course_name = "python basics"
    print(course_name.title())
    print(f"Course name has {len(course_name)} characters.")

    # Lists
    skills = ["Python", "SQL", "Machine Learning"]
    skills.append("RAG")
    print(f"Skills: {skills}")
    print(f"First skill: {skills[0]}")

    # Conditions
    marks = 75
    if marks >= 50:
        print("Result: Pass")
    else:
        print("Result: Fail")

    # Loops
    for number in range(1, 4):
        print(f"Loop number: {number}")

    # Functions
    total_cost = calculate_total(price=500.0, quantity=3)
    print(f"Total cost: {total_cost:.2f}")

    # File handling
    write_and_read_file()


if __name__ == "__main__":
    main()
