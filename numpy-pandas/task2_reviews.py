import pandas as pd
import re
import matplotlib.pyplot as plt
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.decomposition import TruncatedSVD

# 1. Load customer review data
df = pd.read_csv("datasets/customer_reviews.csv")

# 2. Preprocess review text
df["Review"] = df["Review"].fillna("").apply(
    lambda text: re.sub(r"[^\w\s]", "", text.lower())
)

# Standardize sentiment labels
df["Sentiment"] = df["Sentiment"].str.lower().str.strip()

# 3. Calculate word count and average by sentiment
df["Word_Count"] = df["Review"].apply(
    lambda text: len(text.split())
)

print("Average word count by sentiment:")
print(df.groupby("Sentiment")["Word_Count"].mean())

# 4. Visualize word-count distribution
df.boxplot(column="Word_Count", by="Sentiment")

plt.title("Word Count Distribution by Sentiment")
plt.suptitle("")
plt.xlabel("Sentiment")
plt.ylabel("Word Count")
plt.tight_layout()
plt.show()

# 5. Convert review text into numerical vectors using TF-IDF
vectorizer = TfidfVectorizer()
X = vectorizer.fit_transform(df["Review"])

# Reduce vectors to two dimensions for visualization
svd = TruncatedSVD(n_components=2, random_state=42)
points = svd.fit_transform(X)

# Plot reviews by sentiment
plt.figure(figsize=(10, 6))

colors = {
    "positive": "green",
    "negative": "red",
    "neutral": "blue"
}

for sentiment, color in colors.items():
    mask = (df["Sentiment"] == sentiment).to_numpy()

    plt.scatter(
        points[mask, 0],
        points[mask, 1],
        color=color,
        label=sentiment,
        alpha=0.7
    )

# Highlight one positive review
positive_indices = df.index[
    df["Sentiment"] == "positive"
]

if len(positive_indices) > 0:
    positive_index = positive_indices[0]
    position = df.index.get_loc(positive_index)

    plt.scatter(
        points[position, 0],
        points[position, 1],
        color="orange",
        marker="*",
        s=250,
        edgecolors="black",
        label="Selected positive review"
    )

plt.title("Customer Reviews by Sentiment")
plt.xlabel("Component 1")
plt.ylabel("Component 2")
plt.legend()
plt.grid(True, alpha=0.3)
plt.tight_layout()
plt.show()

# Display the selected positive review
if len(positive_indices) > 0:
    print("\nSelected positive review:")
    print(df.loc[positive_index, "Review"])