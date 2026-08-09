import type { Meta, StoryObj } from "@storybook/react-vite";
import InputField from ".";

const meta: Meta<typeof InputField> = {
  title: "Atoms/Input",
  component: InputField,
};

export default meta;

type Story = StoryObj<typeof InputField>;

export const Name: Story = {
  args: {
    label: "Name",
    placeholder: "Enter your name",
  },
};

export const Email: Story = {
  args: {
    label: "Email",
    placeholder: "Enter your email",
    type: "email",
  },
};

export const Password: Story = {
  args: {
    label: "Password",
    placeholder: "Enter your password",
    type: "password",
  },
};