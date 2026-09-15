import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import CustomDivider from "./index";

describe("CustomDivider", () => {
  it("shows the word Or", () => {
    render(<CustomDivider />);
    expect(screen.getByText("Or")).toBeInTheDocument();
  });
});
