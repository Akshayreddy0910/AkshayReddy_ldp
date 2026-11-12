# Simple Conversational AI Chatbot

A beginner-friendly chatbot project using **Python, Streamlit, LangChain, and Google Gemini**.

## What it does

- Lets a user chat through a simple web interface.
- Sends the conversation to a Gemini language model.
- Keeps recent messages in Streamlit session state so follow-up questions make sense.
- Includes a button to clear the conversation.

## Files in this project

| File | Purpose |
|---|---|
| `app.py` | Main chatbot application and chat logic |
| `requirements.txt` | Python libraries needed for the project |
| `.env.example` | Example file for the Gemini API key and model name |
| `.gitignore` | Prevents secret keys and temporary files from being committed |
| `run.bat` | Optional Windows setup helper |
| `README.md` | Setup instructions and simple explanation |

## Requirements

- Windows, macOS, or Linux
- Python 3.10 or newer
- Internet connection
- Google AI Studio API key

## Setup on Windows

1. Extract the ZIP file.
2. Open the extracted `conversational_chatbot` folder.
3. Open Command Prompt or the VS Code terminal in that folder.
4. Create a virtual environment:

   ```bash
   python -m venv .venv
   ```

5. Activate it:

   ```bash
   .venv\Scripts\activate
   ```

6. Install the packages:

   ```bash
   pip install -r requirements.txt
   ```

7. Copy `.env.example` and rename the copy to `.env`.
8. Open `.env` and replace `your_google_api_key_here` with your Google AI Studio API key.
9. Start the chatbot:

   ```bash
   streamlit run app.py
   ```

10. Streamlit will show a local URL, usually `http://localhost:8501`. Open it in your browser.

### Easier Windows setup

You can also double-click `run.bat`. It creates a virtual environment and installs the packages. After it finishes, add your API key to `.env`, then run:

```bash
.venv\Scripts\activate
streamlit run app.py
```

## Get the API key

Create or copy an API key from Google AI Studio:

https://aistudio.google.com/app/apikey

Keep the key private. Do not paste it into `app.py`, upload it to GitHub, or share the completed `.env` file.

## Simple explanation of how the code works

1. **Streamlit** creates the chat page, message boxes, and clear-conversation button.
2. **LangChain's ChatGoogleGenerativeAI** connects the Python app to the Gemini model.
3. When the user sends a message, the app stores it in `st.session_state.messages`.
4. The app sends a system instruction and recent user/assistant messages to Gemini.
5. Gemini generates a reply, which is shown on the page and saved in the session.
6. Because earlier messages are sent again with the new question, the chatbot can answer follow-up questions.

## Important notes

- An API key is required; the project does not include one.
- API availability, model access, quotas, and billing depend on your Google AI Studio account and current Google terms.
- The conversation is kept in the current Streamlit browser session. It is not saved permanently to a database.
- If you see an API or model error, check the key, internet connection, model access, and account quota.
- Do not commit `.env` to GitHub.
