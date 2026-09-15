import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

import LoginForm from "./index";

describe("LoginForm", () => {
  it("renders login form", () => {
    render(<LoginForm />);

    expect(
      screen.getByRole("heading", { name: /login to seeder/i })
    ).toBeInTheDocument();

    expect(
      screen.getByPlaceholderText(/enter your email/i)
    ).toBeInTheDocument();

    expect(
      screen.getByPlaceholderText(/enter your password/i)
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", { name: /continue/i })
    ).toBeInTheDocument();
  });

  it("shows email validation error", async () => {
    const user = userEvent.setup();

    render(<LoginForm />);

    const emailInput = screen.getByPlaceholderText(/enter your email/i);

    await user.type(emailInput, "invalid-email");
    await user.tab();

    expect(
      screen.getByText(/please enter a valid email address/i)
    ).toBeInTheDocument();
  });

  it("shows password validation error", async () => {
    const user = userEvent.setup();

    render(<LoginForm />);

    const passwordInput =
      screen.getByPlaceholderText(/enter your password/i);

    await user.type(passwordInput, "abc");
    await user.tab();

    expect(
      screen.getByText(/password must be at least 8 characters long/i)
    ).toBeInTheDocument();
  });

  it("does not show success when password is invalid", async () => {
    const user = userEvent.setup();

    render(<LoginForm />);

    await user.type(
      screen.getByPlaceholderText(/enter your email/i),
      "test@gmail.com"
    );

    await user.type(
      screen.getByPlaceholderText(/enter your password/i),
      "abc"
    );

    await user.click(
      screen.getByRole("button", { name: /continue/i })
    );

    expect(
      screen.getByText(/password must be at least 8 characters long/i)
    ).toBeInTheDocument();

    expect(
      screen.queryByText(/login successful/i)
    ).not.toBeInTheDocument();
  });

  it("shows success message when valid form is submitted", async () => {
    const user = userEvent.setup();

    render(<LoginForm />);

    await user.type(
      screen.getByPlaceholderText(/enter your email/i),
      "test@gmail.com"
    );

    await user.type(
      screen.getByPlaceholderText(/enter your password/i),
      "Password1!"
    );

    await user.click(
      screen.getByRole("button", { name: /continue/i })
    );

    expect(
      await screen.findByText(/login successful/i)
    ).toBeInTheDocument();
  });

  it("closes the success message", async () => {
    const user = userEvent.setup();

    render(<LoginForm />);

    await user.type(
      screen.getByPlaceholderText(/enter your email/i),
      "test@gmail.com"
    );

    await user.type(
      screen.getByPlaceholderText(/enter your password/i),
      "Password1!"
    );

    await user.click(
      screen.getByRole("button", { name: /continue/i })
    );

    expect(
      await screen.findByText(/login successful/i)
    ).toBeInTheDocument();

    const closeButton = screen.getByRole("button", {
      name: /close/i,
    });

    await user.click(closeButton);
  });
});