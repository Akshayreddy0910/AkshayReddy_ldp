import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi } from "vitest";

import QuantityStepper from "./index";

describe("QuantityStepper", () => {
  it("shows the current value", () => {
    render(<QuantityStepper value={2} onChange={() => {}} />);
    expect(screen.getByText("2")).toBeInTheDocument();
  });

  it("calls onChange with value + 1 when increase is clicked", async () => {
    const handleChange = vi.fn();
    render(<QuantityStepper value={2} onChange={handleChange} />);

    await userEvent.click(screen.getByRole("button", { name: "Increase quantity" }));

    expect(handleChange).toHaveBeenCalledWith(3);
  });

  it("calls onChange with value - 1 when decrease is clicked", async () => {
    const handleChange = vi.fn();
    render(<QuantityStepper value={2} onChange={handleChange} />);

    await userEvent.click(screen.getByRole("button", { name: "Decrease quantity" }));

    expect(handleChange).toHaveBeenCalledWith(1);
  });

  it("disables decrease at the minimum value", () => {
    render(<QuantityStepper value={1} onChange={() => {}} min={1} />);
    expect(screen.getByRole("button", { name: "Decrease quantity" })).toBeDisabled();
  });

  it("disables increase at the maximum value", () => {
    render(<QuantityStepper value={10} onChange={() => {}} max={10} />);
    expect(screen.getByRole("button", { name: "Increase quantity" })).toBeDisabled();
  });
});
