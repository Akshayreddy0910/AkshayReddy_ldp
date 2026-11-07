# News Summarization Tool

A simple command-line application that extracts text from news URLs, summarizes it with a local LLM through LM Studio and LangChain, saves summaries as JSON, and answers questions about saved summaries.

## Requirements
- Python 3.10+
- LM Studio with a model loaded
- LM Studio local API server running at `http://localhost:1235`
- Internet access to download public news pages

## Install
```bash
pip install -r requirements.txt
```

## Run
```bash
python news_summarizer.py
```

Choose option 1, paste a public article URL, enter its publication date as `YYYY-MM-DD`, and enter a type such as `financial` or `technology`. Choose option 2 to ask questions about the summaries saved in `news.json`.

## JSON format
```json
{
  "date": "2026-10-23",
  "summary": "A concise summary of the article...",
  "articleType": "technology"
}
```

## Notes
The date and article type are entered by the user and are not independently verified. Some news websites block automated downloads or render text with JavaScript; try another public article if extraction fails. The local model runs through LM Studio, so model inference has no hosted per-token API fee.
