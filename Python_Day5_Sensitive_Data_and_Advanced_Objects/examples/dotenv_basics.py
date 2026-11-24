"""Load configuration values from a .env file."""
import os
from dotenv import load_dotenv

load_dotenv()

app_name = os.getenv("APP_NAME", "MyApplication")
debug_mode = os.getenv("DEBUG", "False")

print("Application:", app_name)
print("Debug mode:", debug_mode)
