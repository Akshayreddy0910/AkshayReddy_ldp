import logging

logging.basicConfig(
    level=logging.INFO,
    format="%(levelname)s: %(message)s",
)


def calculate_average(marks: list[float]) -> float:
    """Return the average of a non-empty list of marks."""
    if not marks:
        raise ValueError("At least one mark is required.")

    return sum(marks) / len(marks)


def get_result(average: float, pass_mark: float = 50.0) -> str:
    """Return Pass or Fail based on the average and pass mark."""
    return "Pass" if average >= pass_mark else "Fail"


def display_report(student_name: str, marks: list[float]) -> None:
    """Calculate and display a student's marks report."""
    average = calculate_average(marks)
    result = get_result(average)

    print(f"Student: {student_name}")
    print(f"Marks: {marks}")
    print(f"Average: {average:.2f}")
    print(f"Result: {result}")


def main() -> None:
    """Run the student marks example."""
    student_name = "Akshay"
    marks = [85.0, 90.0, 80.0]

    try:
        display_report(student_name, marks)
        logging.info("Student report generated successfully.")
    except ValueError as error:
        logging.error("Could not generate report: %s", error)


if __name__ == "__main__":
    main()
