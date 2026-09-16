import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { MemoryRouter } from "react-router-dom";

import SocialLogin from "./index";

const renderSocialLogin = (showSignupLink = true) => {
  return render(
    <MemoryRouter>
      <SocialLogin showSignupLink={showSignupLink} />
    </MemoryRouter>
  );
};

describe("SocialLogin", () => {
  it("renders all social login options", () => {
    renderSocialLogin();

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

  it("renders signup link by default", () => {
    renderSocialLogin();

    const signupLink = screen.getByRole("link", {
      name: /sign up/i,
    });

    expect(signupLink).toBeInTheDocument();
    expect(signupLink).toHaveAttribute("href", "/signup");

    expect(
      screen.getByText(/don't have an account/i)
    ).toBeInTheDocument();
  });

  it("renders login link when showSignupLink is false", () => {
    renderSocialLogin(false);

    const loginLink = screen.getByRole("link", {
      name: /login/i,
    });

    expect(loginLink).toBeInTheDocument();
    expect(loginLink).toHaveAttribute("href", "/");

    expect(
      screen.getByText(/already have an account/i)
    ).toBeInTheDocument();
  });

  it("renders the divider", () => {
    renderSocialLogin();

    expect(screen.getByText("Or")).toBeInTheDocument();
  });
});