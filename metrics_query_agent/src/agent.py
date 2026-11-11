from langchain_ollama import ChatOllama
from langgraph.prebuilt import create_react_agent
from .metrics_tools import TOOLS

SYSTEM_PROMPT = """
You are a business metrics assistant.
Use the provided tools to answer metric questions.
Never invent numbers.
Keep answers simple and concise.
"""

def build_agent():

    llm = ChatOllama(model="llama3.1:latest", temperature=0)

    return create_react_agent(
        llm,
        TOOLS,
        prompt=SYSTEM_PROMPT
    )