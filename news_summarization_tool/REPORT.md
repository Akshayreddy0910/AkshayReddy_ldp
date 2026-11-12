# Brief Report: News Summarization Tool

## LLM API integration
The application uses LangChain's `ChatOpenAI` integration to communicate with LM Studio's OpenAI-compatible local API. The model receives an instruction and the extracted article text, then returns a concise summary.

## Article extraction and processing
Python `requests` downloads the public article page. BeautifulSoup removes common non-content elements and collects paragraph text. The text is capped at 12,000 characters to keep the prompt manageable. Some websites may block scraping or require JavaScript, so extraction can fail for certain URLs.

## JSON storage and question answering
Each record contains `date`, `summary`, and `articleType` and is stored in `news.json`. Users can ask questions about the saved summaries; the model is instructed to answer only from that JSON data.

## API usage costs
The current version uses a local model through LM Studio, avoiding hosted per-token inference charges. Hardware and electricity still have costs, and article retrieval requires internet access. For a hosted API, reduce unnecessary input text, select a model appropriate to the task, and monitor token usage.

## Challenges and future improvements
Web pages use different layouts, and some sites block automated requests. Small local models can also make summarization mistakes. The publication date and article type are entered by the user, not verified automatically. Future improvements include extracting metadata automatically, storing article URLs, handling duplicates, adding tests and a web interface, and evaluating summary quality.
