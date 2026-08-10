import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";

import Input from ".";

const meta: Meta<typeof Input> = {
  title: "Atoms/Input",
  component: Input,
  args: {
    onChange: fn(),
    onBlur: fn(),
  },
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Name: Story = {
  args: {
    label: "Name",
    name: "name",
    placeholder: "Enter your name",
  },
};

export const Email: Story = {
  args: {
    label: "Email",
    name: "email",
    placeholder: "Enter your email",
    type: "email",
  },
};

export const Password: Story = {
  args: {
    label: "Password",
    name: "password",
    placeholder: "Enter your password",
    type: "password",
  },
};

export const WithError: Story = {
  args: {
    label: "Email",
    name: "email",
    placeholder: "Enter your email",
    type: "email",
    error: true,
    helperText: "Please enter a valid email address",
  },
};

export const Disabled: Story = {
  args: {
    label: "Name",
    name: "name",
    placeholder: "Enter your name",
    disabled: true,
  },
};
