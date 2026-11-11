from dotenv import load_dotenv
from src.database import initialize_database
from src.agent import build_agent

def main():
    load_dotenv()
    initialize_database()
    agent = build_agent()

    print("\n=== Business Metrics Agent ===")
    print("Ask about revenue, orders, average order value, customers, or compare months.")
    print("Example: What was the revenue in January 2026?")
    print("Type 'exit' to quit.\n")

    while True:
        question = input("You: ").strip()
        if question.lower() in {"exit", "quit"}:
            print("Goodbye!")
            break
        if not question:
            continue

        try:
            result = agent.invoke({
                "messages": [{"role": "user", "content": question}]
            })
            answer = result["messages"][-1].content
            print(f"\nAgent: {answer}\n")
        except Exception as exc:
            print(f"\nError: {exc}\n")

if __name__ == "__main__":
    main()
