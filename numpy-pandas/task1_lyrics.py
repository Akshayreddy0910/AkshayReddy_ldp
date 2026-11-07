import pandas as pd
import numpy as np
import re

# Load the dataset
df = pd.read_csv("datasets/lyrics.csv")

# Convert lyrics to lowercase and remove punctuation
df["Lyrics"] = df["Lyrics"].apply(
    lambda text: re.sub(r"[^\w\s]", "", str(text).lower())
)

# Randomly select 10 lyrics
sampled_lyrics = np.random.choice(
    df["Lyrics"].dropna().to_numpy(),
    size=10,
    replace=False
)

print("Random sample of 10 song lyrics:\n")
for lyric in sampled_lyrics:
    print(lyric)