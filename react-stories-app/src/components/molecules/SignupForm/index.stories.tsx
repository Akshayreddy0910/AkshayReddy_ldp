import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";

import SignupForm from ".";

const meta: Meta<typeof SignupForm> = {
  title: "Molecules/SignupForm",
  component: SignupForm,
  args: {
    name: "",
    email: "",
    password: "",
    onNameChange: fn(),
    onEmailChange: fn(),
    onPasswordChange: fn(),
    onNameBlur: fn(),
    onEmailBlur: fn(),
    onPasswordBlur: fn(),
    onToggleShowPassword: fn(),
    onSubmit: fn(),
  },
};

export default meta;

type Story = StoryObj<typeof SignupForm>;

export const Default: Story = {};

export const Filled: Story = {
  args: {
    name: "Akshay Reddy",
    email: "akshay@example.com",
    password: "password123",
  },
};

export const WithErrors: Story = {
  args: {
    name: "",
    email: "akshay@",
    password: "123",
    nameError: "Name is required",
    emailError: "Please enter a valid email address",
    passwordError: "Password must be at least 8 characters",
  },
};
