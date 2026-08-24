import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import PriceTag from "./index";

describe("PriceTag", () => {
  it("shows the price", () => {
    render(<PriceTag price={250} />);
    expect(screen.getByText("₹250.00")).toBeInTheDocument();
  });

  it("does not show a struck-through price when there is no discount", () => {
    render(<PriceTag price={250} />);
    expect(screen.queryByText("₹300.00")).not.toBeInTheDocument();
  });

  it("shows both prices when there is a discount", () => {
    render(<PriceTag price={250} originalPrice={300} />);
    expect(screen.getByText("₹250.00")).toBeInTheDocument();
    expect(screen.getByText("₹300.00")).toBeInTheDocument();
  });

  it("ignores originalPrice when it is not actually higher", () => {
    render(<PriceTag price={250} originalPrice={200} />);
    expect(screen.queryByText("₹200.00")).not.toBeInTheDocument();
  });
});
