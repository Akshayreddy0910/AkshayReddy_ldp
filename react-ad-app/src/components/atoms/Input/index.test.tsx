import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi } from "vitest";

import InputField from "./index";

describe("InputField", () => {
  it("shows the label", () => {
    render(<InputField label="Email" type="email" />);
    expect(screen.getByLabelText("Email")).toBeInTheDocument();
  });

  it("calls onChange when typing", async () => {
    const handleChange = vi.fn();
    render(<InputField label="Email" type="email" onChange={handleChange} />);

    await userEvent.type(screen.getByLabelText("Email"), "a");

    expect(handleChange).toHaveBeenCalled();
  });

  it("shows the helper text when there is an error", () => {
    render(
      <InputField
        label="Password"
        type="password"
        error
        helperText="Password is required"
      />
    );

    expect(screen.getByText("Password is required")).toBeInTheDocument();
  });

  it("toggles password visibility when the eye icon is clicked", async () => {
    render(<InputField label="Password" type="password" />);

    const input = screen.getByLabelText("Password");
    expect(input).toHaveAttribute("type", "password");

    await userEvent.click(screen.getByRole("button"));

    expect(input).toHaveAttribute("type", "text");
  });
});
