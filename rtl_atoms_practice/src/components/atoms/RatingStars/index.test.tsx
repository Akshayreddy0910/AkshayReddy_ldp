import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import RatingStars from "./index";

describe("RatingStars", () => {
  it("has an accessible label with the rating value", () => {
    render(<RatingStars rating={4} />);
    expect(screen.getByRole("img", { name: "Rated 4 out of 5" })).toBeInTheDocument();
  });

  it("shows 5 filled stars for a perfect rating", () => {
    render(<RatingStars rating={5} />);
    expect(screen.getByRole("img")).toHaveTextContent("*****");
  });

  it("shows a mix of filled and empty stars for a partial rating", () => {
    render(<RatingStars rating={3} />);
    expect(screen.getByRole("img")).toHaveTextContent("***--");
  });

  it("rounds a decimal rating to the nearest star", () => {
    render(<RatingStars rating={3.6} />);
    expect(screen.getByRole("img")).toHaveTextContent("****-");
  });
});
