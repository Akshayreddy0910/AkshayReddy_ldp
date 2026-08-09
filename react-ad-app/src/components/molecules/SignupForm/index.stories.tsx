import type { Meta, StoryObj } from "@storybook/react-vite";
import SignupForm from ".";

const meta: Meta<typeof SignupForm> = {
  title: "Molecules/SignupForm",
  component: SignupForm,
};

export default meta;

type Story = StoryObj<typeof SignupForm>;

export const Default: Story = {};