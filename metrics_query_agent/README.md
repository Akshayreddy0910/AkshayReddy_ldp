# Metrics Query Agent (LangChain + LangGraph)

A small, practical agent that answers business-metrics questions such as:

- What was revenue in January 2026?
- How many orders did we receive in February?
- Compare revenue in January and February.
- What was the average order value in March?

It uses:
- **LangChain** (`@tool`) to define safe tools the model can call.
- **LangGraph** (`create_react_agent`) to run the agent/tool loop.
- **SQLite** for a local sample business database.
- **OpenAI-compatible chat model** through `langchain-openai`.

The database is seeded automatically with sample order data. No external database is required.

## 1. Project structure

```text
metrics_query_agent/
├── src/
│   ├── __init__.py
│   ├── database.py       # Creates and seeds SQLite database
│   ├── metrics_tools.py  # LangChain tools for business metrics
│   └── agent.py          # LangGraph agent setup
├── main.py               # Command-line chat interface
├── requirements.txt
├── .env.example
└── README.md
```

## 2. Setup (Windows)

Open Command Prompt or the VS Code terminal in this folder.

```bash
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
```

Copy `.env.example` to `.env` and add your API key:

```env
OPENAI_API_KEY=your_api_key_here
OPENAI_MODEL=gpt-4o-mini
```

The API key is needed for the language model. Do not commit `.env` to GitHub.

## 3. Run

```bash
python main.py
```

Try these questions:

- `What was the revenue in January 2026?`
- `How many orders did we receive in February 2026?`
- `Compare revenue in January and February 2026.`
- `What was the average order value in March 2026?`
- `Show the available metrics.`

Type `exit` to stop.

## 4. How it works

1. The user asks a question in normal language.
2. The LangGraph agent receives the question and decides which tool is needed.
3. The agent calls one of the LangChain tools.
4. The tool runs a parameterized query against SQLite and returns structured results.
5. LangGraph sends the result back to the model.
6. The model explains the metric in a readable answer.

### Architecture

```text
User question
     |
     v
LangGraph agent (LLM reasoning + workflow)
     |
     +---- chooses a LangChain tool
                |
                +--> get_metric_summary()
                +--> compare_revenue()
                +--> list_available_metrics()
                         |
                         v
                   SQLite database
                         |
                         v
                 Tool result returned
                         |
                         v
                 LangGraph agent
                         |
                         v
                  Final answer
```

## 5. Safety and scope

- The agent does **not** accept arbitrary SQL from the LLM.
- Tools use fixed, parameterized SQL queries.
- Only supported metrics and date ranges are exposed.
- The included database contains synthetic sample data, not real business information.

## 6. Important concepts

- **LangChain tool:** A Python function exposed to the LLM with a name and description.
- **LangGraph agent:** Controls the loop between the model and tools until a final answer is produced.
- **SQLite:** A lightweight local database used for this demo.
- **Tool calling:** The model selects a tool and supplies its arguments; application code executes it.

## Troubleshooting

- `OPENAI_API_KEY is missing`: Create `.env` from `.env.example` and add a valid key.
- Authentication or quota error: Check that the key is valid and that the API account has available quota.
- Import errors: Activate the virtual environment and run `pip install -r requirements.txt`.
- The database is recreated only if it does not exist. Delete `metrics.db` if you want to reseed it.
