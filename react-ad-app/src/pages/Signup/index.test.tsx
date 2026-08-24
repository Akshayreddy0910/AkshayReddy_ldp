import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { MemoryRouter } from "react-router-dom";

import Signup from "./index";

describe("Signup page", () => {
  it("renders signup page", () => {
    render(
      <MemoryRouter>
        <Signup />
      </MemoryRouter>
    );

    expect(
      screen.getByText("Seeder")
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", {
        name: /sign up/i,
      })
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
  });

  it("renders social login options", () => {
    render(
      <MemoryRouter>
        <Signup />
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

  it("renders login link", () => {
    render(
      <MemoryRouter>
        <Signup />
      </MemoryRouter>
    );

    const loginLink = screen.getByRole("link", {
      name: /login/i,
    });

    expect(loginLink).toBeInTheDocument();
    expect(loginLink).toHaveAttribute("href", "/");
  });
});