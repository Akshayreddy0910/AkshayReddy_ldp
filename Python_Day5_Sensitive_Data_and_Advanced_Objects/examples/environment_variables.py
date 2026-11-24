"""Read sensitive configuration from environment variables."""
import os
from dotenv import load_dotenv

load_dotenv()

api_key = os.getenv("API_KEY")

if api_key and api_key != "replace_with_your_test_key":
    print("API key is configured.")
else:
    print("API key is missing or still using the placeholder.")

# Do not print the actual API key.
