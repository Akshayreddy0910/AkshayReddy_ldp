import os

import streamlit as st
from dotenv import load_dotenv
from langchain_google_genai import ChatGoogleGenerativeAI
from langchain_core.messages import AIMessage, HumanMessage, SystemMessage

load_dotenv()

st.set_page_config(page_title="Simple AI Chatbot", page_icon="💬", layout="centered")
st.title("💬 Conversational AI Chatbot")
st.caption("A simple chatbot built with Streamlit, LangChain, and Google Gemini.")

api_key = os.getenv("GOOGLE_API_KEY", "").strip()
model_name = os.getenv("GEMINI_MODEL", "gemini-2.5-flash").strip()

with st.sidebar:
    st.header("Chat settings")
    st.write(f"Model: `{model_name}`")
    if st.button("Clear conversation", use_container_width=True):
        st.session_state.messages = []
        st.rerun()
    st.divider()
    st.caption("Add your Google AI Studio API key to the `.env` file to start chatting.")

if "messages" not in st.session_state:
    st.session_state.messages = []

if not api_key:
    st.info(
        "To start, create a Google AI Studio API key, copy `.env.example` to `.env`, "
        "and paste your key after `GOOGLE_API_KEY=`."
    )
    st.stop()

# Display the conversation already stored for this browser session.
for message in st.session_state.messages:
    with st.chat_message(message["role"]):
        st.markdown(message["content"])

user_text = st.chat_input("Type your message...")
if user_text:
    st.session_state.messages.append({"role": "user", "content": user_text})
    with st.chat_message("user"):
        st.markdown(user_text)

    with st.chat_message("assistant"):
        with st.spinner("Thinking..."):
            try:
                llm = ChatGoogleGenerativeAI(
                    model=model_name,
                    google_api_key=api_key,
                    temperature=0.7,
                )

                conversation = [
                    SystemMessage(
                        content=(
                            "You are a friendly, helpful conversational chatbot. "
                            "Answer in simple, clear language. Keep answers focused. "
                            "Use the conversation history to answer follow-up questions."
                        )
                    )
                ]

                # Send recent messages so the chatbot can understand follow-up questions.
                for item in st.session_state.messages[-20:]:
                    if item["role"] == "user":
                        conversation.append(HumanMessage(content=item["content"]))
                    else:
                        conversation.append(AIMessage(content=item["content"]))

                response = llm.invoke(conversation)
                answer = response.content
                if isinstance(answer, list):
                    answer = "\n".join(
                        part.get("text", str(part)) if isinstance(part, dict) else str(part)
                        for part in answer
                    )
                answer = str(answer)
                st.markdown(answer)
                st.session_state.messages.append(
                    {"role": "assistant", "content": answer}
                )
            except Exception as exc:
                st.error(
                    "The chatbot could not get a response. Check your API key, internet "
                    "connection, model name, and Google AI Studio quota."
                )
                st.caption(f"Technical detail: {exc}")
                # Remove the unanswered user message so it is not resent as a completed turn.
                if st.session_state.messages and st.session_state.messages[-1]["role"] == "user":
                    st.session_state.messages.pop()
