import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";

import LoginForm from ".";

const meta: Meta<typeof LoginForm> = {
  title: "Molecules/LoginForm",
  component: LoginForm,
  args: {
    email: "",
    password: "",
    onEmailChange: fn(),
    onPasswordChange: fn(),
    onEmailBlur: fn(),
    onPasswordBlur: fn(),
    onToggleShowPassword: fn(),
    onForgotPasswordClick: fn(),
    onSubmit: fn(),
  },
};

export default meta;

type Story = StoryObj<typeof LoginForm>;

export const Default: Story = {};

export const Filled: Story = {
  args: {
    email: "akshay@example.com",
    password: "password123",
  },
};

export const WithErrors: Story = {
  args: {
    email: "akshay@",
    password: "123",
    emailError: "Please enter a valid email address",
    passwordError: "Password must be at least 8 characters",
  },
};

export const PasswordVisible: Story = {
  args: {
    email: "akshay@example.com",
    password: "password123",
    showPassword: true,
  },
};
