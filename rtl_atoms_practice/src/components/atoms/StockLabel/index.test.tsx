import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import StockLabel from "./index";

describe("StockLabel", () => {
  it("shows Out of Stock when quantity is zero", () => {
    render(<StockLabel quantity={0} />);
    expect(screen.getByText("Out of Stock")).toBeInTheDocument();
  });

  it("shows a low stock warning below the threshold", () => {
    render(<StockLabel quantity={3} />);
    expect(screen.getByText("Only 3 left")).toBeInTheDocument();
  });

  it("shows In Stock above the threshold", () => {
    render(<StockLabel quantity={20} />);
    expect(screen.getByText("In Stock")).toBeInTheDocument();
  });

  it("respects a custom low stock threshold", () => {
    render(<StockLabel quantity={8} lowStockThreshold={10} />);
    expect(screen.getByText("Only 8 left")).toBeInTheDocument();
  });
});
