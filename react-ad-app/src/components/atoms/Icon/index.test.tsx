import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import Icon from "./index";

describe("Icon", () => {
  it("renders the image with the right src and alt", () => {
    render(<Icon src="/google.svg" alt="Google logo" />);

    const img = screen.getByAltText("Google logo");
    expect(img).toHaveAttribute("src", "/google.svg");
  });

  it("uses default width and height when not given", () => {
    render(<Icon src="/google.svg" alt="Google logo" />);

    const img = screen.getByAltText("Google logo");
    expect(img).toHaveAttribute("width", "24");
    expect(img).toHaveAttribute("height", "24");
  });

  it("uses custom width and height when given", () => {
    render(<Icon src="/google.svg" alt="Google logo" width={40} height={40} />);

    const img = screen.getByAltText("Google logo");
    expect(img).toHaveAttribute("width", "40");
    expect(img).toHaveAttribute("height", "40");
  });
});
