import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { MemoryRouter } from "react-router-dom";

import Login from "./index";

describe("Login page", () => {
  it("renders login page", () => {
    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );

    expect(
      screen.getByText("Seeder")
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", {
        name: /login to seeder/i,
      })
    ).toBeInTheDocument();

    expect(
      screen.getByPlaceholderText(/enter your email/i)
    ).toBeInTheDocument();

    expect(
      screen.getByPlaceholderText(/enter your password/i)
    ).toBeInTheDocument();
  });

  it("renders social login options", () => {
    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );

    expect(
      screen.getByRole("button", { name: /google/i })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", { name: /stripe/i })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", { name: /xero/i })
    ).toBeInTheDocument();
  });

  it("renders signup link", () => {
    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );

    const signupLink = screen.getByRole("link", {
      name: /sign up/i,
    });

    expect(signupLink).toBeInTheDocument();
    expect(signupLink).toHaveAttribute("href", "/signup");
  });
});