import type { Meta, StoryObj } from "@storybook/react-vite";
import LoginForm from ".";

const meta: Meta<typeof LoginForm> = {
  title: "Molecules/LoginForm",
  component: LoginForm,
};

export default meta;

type Story = StoryObj<typeof LoginForm>;

export const Default: Story = {};