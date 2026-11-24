# Python Day 5 – Sensitive Data and Advanced Python Objects

## Setup
1. Open this folder in VS Code.
2. Create a virtual environment: `py -m venv .venv`
3. Activate it in PowerShell: `.venv\Scripts\Activate.ps1`
4. Install the package: `python -m pip install python-dotenv`
5. Copy `.env.example` to `.env` and use sample values.
6. Run an example: `python examples/dotenv_basics.py`

## Topics
- Environment variables and dotenv
- Keeping API keys and other sensitive values out of source code
- Object identity, mutability, shallow copy, and deep copy
- Dataclasses
- Properties, class methods, static methods, and special methods

## Security
Never commit a real `.env` file or print real secrets. `.env.example` contains placeholders only.
