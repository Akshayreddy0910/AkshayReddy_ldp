import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi } from "vitest";

import CustomButton from "./index";

describe("CustomButton", () => {
  it("shows the given text", () => {
    render(<CustomButton text="Sign In" />);
    expect(screen.getByRole("button", { name: "Sign In" })).toBeInTheDocument();
  });

  it("calls onClick when clicked", async () => {
    const handleClick = vi.fn();
    render(<CustomButton text="Sign In" onClick={handleClick} />);

    await userEvent.click(screen.getByRole("button", { name: "Sign In" }));

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("uses type submit when passed", () => {
    render(<CustomButton text="Create Account" type="submit" />);
    expect(screen.getByRole("button", { name: "Create Account" })).toHaveAttribute(
      "type",
      "submit"
    );
  });
});
