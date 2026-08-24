import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

import SignupForm from "./index";

describe("SignupForm", () => {
  it("renders signup form", () => {
    render(<SignupForm />);

    expect(
      screen.getByRole("heading", { name: /sign up/i })
    ).toBeInTheDocument();

    expect(
      screen.getByPlaceholderText(/your name/i)
    ).toBeInTheDocument();

    expect(
      screen.getByPlaceholderText(/email address/i)
    ).toBeInTheDocument();

    expect(
      screen.getByPlaceholderText(/password/i)
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", { name: /sign up/i })
    ).toBeInTheDocument();
  });

  it("shows name validation error", async () => {
    const user = userEvent.setup();

    render(<SignupForm />);

    const nameInput = screen.getByPlaceholderText(/your name/i);

    await user.click(nameInput);
    await user.tab();

    expect(
      screen.getByText(/name is required/i)
    ).toBeInTheDocument();
  });

  it("does not show name error when name is entered", async () => {
    const user = userEvent.setup();

    render(<SignupForm />);

    const nameInput = screen.getByPlaceholderText(/your name/i);

    await user.type(nameInput, "Akshay");
    await user.tab();

    expect(
      screen.queryByText(/name is required/i)
    ).not.toBeInTheDocument();
  });

  it("shows email validation error", async () => {
    const user = userEvent.setup();

    render(<SignupForm />);

    const emailInput =
      screen.getByPlaceholderText(/email address/i);

    await user.type(emailInput, "invalid-email");
    await user.tab();

    expect(
      screen.getByText(/please enter a valid email address/i)
    ).toBeInTheDocument();
  });

  it("shows password validation error", async () => {
    const user = userEvent.setup();

    render(<SignupForm />);

    const passwordInput =
      screen.getByPlaceholderText(/password/i);

    await user.type(passwordInput, "abc");
    await user.tab();

    expect(
      screen.getByText(/password must be at least 8 characters long/i)
    ).toBeInTheDocument();
  });

  it("does not show success when email is invalid", async () => {
    const user = userEvent.setup();

    render(<SignupForm />);

    await user.type(
      screen.getByPlaceholderText(/your name/i),
      "Akshay"
    );

    await user.type(
      screen.getByPlaceholderText(/email address/i),
      "invalid-email"
    );

    await user.type(
      screen.getByPlaceholderText(/password/i),
      "Password1!"
    );

    await user.click(
      screen.getByRole("button", { name: /sign up/i })
    );

    expect(
      screen.getByText(/please enter a valid email address/i)
    ).toBeInTheDocument();

    expect(
      screen.queryByText(/signup successful/i)
    ).not.toBeInTheDocument();
  });

  it("does not show success when password is invalid", async () => {
    const user = userEvent.setup();

    render(<SignupForm />);

    await user.type(
      screen.getByPlaceholderText(/your name/i),
      "Akshay"
    );

    await user.type(
      screen.getByPlaceholderText(/email address/i),
      "test@gmail.com"
    );

    await user.type(
      screen.getByPlaceholderText(/password/i),
      "abc"
    );

    await user.click(
      screen.getByRole("button", { name: /sign up/i })
    );

    expect(
      screen.getByText(/password must be at least 8 characters long/i)
    ).toBeInTheDocument();

    expect(
      screen.queryByText(/signup successful/i)
    ).not.toBeInTheDocument();
  });

  it("does not show success when name is empty", async () => {
    const user = userEvent.setup();

    render(<SignupForm />);

    await user.type(
      screen.getByPlaceholderText(/email address/i),
      "test@gmail.com"
    );

    await user.type(
      screen.getByPlaceholderText(/password/i),
      "Password1!"
    );

    await user.click(
      screen.getByRole("button", { name: /sign up/i })
    );

    expect(
      screen.getByText(/name is required/i)
    ).toBeInTheDocument();

    expect(
      screen.queryByText(/signup successful/i)
    ).not.toBeInTheDocument();
  });

  it("shows success message when valid form is submitted", async () => {
    const user = userEvent.setup();

    render(<SignupForm />);

    await user.type(
      screen.getByPlaceholderText(/your name/i),
      "Akshay"
    );

    await user.type(
      screen.getByPlaceholderText(/email address/i),
      "test@gmail.com"
    );

    await user.type(
      screen.getByPlaceholderText(/password/i),
      "Password1!"
    );

    await user.click(
      screen.getByRole("button", { name: /sign up/i })
    );

    expect(
      await screen.findByText(/signup successful/i)
    ).toBeInTheDocument();
  });

  it("closes the success message", async () => {
    const user = userEvent.setup();

    render(<SignupForm />);

    await user.type(
      screen.getByPlaceholderText(/your name/i),
      "Akshay"
    );

    await user.type(
      screen.getByPlaceholderText(/email address/i),
      "test@gmail.com"
    );

    await user.type(
      screen.getByPlaceholderText(/password/i),
      "Password1!"
    );

    await user.click(
      screen.getByRole("button", { name: /sign up/i })
    );

    expect(
      await screen.findByText(/signup successful/i)
    ).toBeInTheDocument();

    const closeButton = screen.getByRole("button", {
      name: /close/i,
    });

    await user.click(closeButton);
  });
});