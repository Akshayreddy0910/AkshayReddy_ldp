@echo off
echo Setting up the conversational chatbot...
python -m venv .venv
call .venv\Scripts\activate
python -m pip install --upgrade pip
pip install -r requirements.txt
if not exist .env copy .env.example .env
echo.
echo Setup complete.
echo Open .env and add your Google AI Studio API key.
echo Then run: streamlit run app.py
pause
