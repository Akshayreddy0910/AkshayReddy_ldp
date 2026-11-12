import json
import requests
from bs4 import BeautifulSoup
from datetime import date
from langchain_openai import ChatOpenAI

# LM Studio local server and model
model = ChatOpenAI(
    base_url="http://localhost:1235/v1",
    api_key="lm-studio",
    model="qwen2.5-coder-3b-instruct",
    temperature=0
)

DATA_FILE = "news.json"


def get_article(url):
    response = requests.get(
        url, timeout=15,
        headers={"User-Agent": "Mozilla/5.0"}
    )
    response.raise_for_status()
    soup = BeautifulSoup(response.text, "html.parser")

    for tag in soup(["script", "style", "nav", "footer", "header", "aside"]):
        tag.decompose()

    article = soup.find("article") or soup
    text = "\n".join(
        p.get_text(" ", strip=True)
        for p in article.find_all("p")
        if p.get_text(strip=True)
    )

    if len(text) < 200:
        raise ValueError("Not enough article text found. Try another public article URL.")
    return text[:12000]


def summarize_article(url, article_date, article_type):
    text = get_article(url)
    prompt = f"""
Summarize this news article in 3-5 concise sentences.
Use only facts from the article. Do not invent details.
Date: {article_date}
Type: {article_type}
Article:
{text}
"""
    summary = model.invoke(prompt).content.strip()
    return {
        "date": article_date,
        "summary": summary,
        "articleType": article_type
    }


def load_news():
    try:
        with open(DATA_FILE, "r", encoding="utf-8") as f:
            return json.load(f)
    except (FileNotFoundError, json.JSONDecodeError):
        return []


def main():
    news = load_news()

    while True:
        print("\n=== News Summarization Tool ===")
        print("1. Summarize article URL")
        print("2. Ask a question about saved summaries")
        print("3. Show saved JSON")
        print("4. Exit")
        choice = input("Choose 1-4: ").strip()

        if choice == "1":
            url = input("Article URL: ").strip()
            article_date = input(
                f"Publication date YYYY-MM-DD (default {date.today()}): "
            ).strip() or str(date.today())
            article_type = input(
                "Article type (financial/technology/sports/politics/general): "
            ).strip().lower() or "general"

            try:
                item = summarize_article(url, article_date, article_type)
                news.append(item)
                with open(DATA_FILE, "w", encoding="utf-8") as f:
                    json.dump(news, f, indent=2, ensure_ascii=False)
                print("\nSummary:\n" + item["summary"])
                print("Saved to news.json")
            except Exception as e:
                print("Could not process article:", e)

        elif choice == "2":
            if not news:
                print("No saved summaries. Add an article first.")
                continue
            question = input("Your question: ")
            prompt = f"""
Answer using only these saved news summaries.
If the information is missing, say so.
Saved summaries: {json.dumps(news, ensure_ascii=False)}
Question: {question}
"""
            print("\nAnswer:", model.invoke(prompt).content.strip())

        elif choice == "3":
            print(json.dumps(news, indent=2, ensure_ascii=False))

        elif choice == "4":
            break
        else:
            print("Please choose 1, 2, 3, or 4.")


if __name__ == "__main__":
    main()
