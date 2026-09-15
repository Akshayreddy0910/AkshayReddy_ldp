import type { Meta, StoryObj } from "@storybook/react-vite";
import CustomButton from ".";

const meta: Meta<typeof CustomButton> = {
  title: "Atoms/Button",
  component: CustomButton,
};

export default meta;

type Story = StoryObj<typeof CustomButton>;

export const Primary: Story = {
  args: {
    text: "Continue",
  },
};

export const Outlined: Story = {
  args: {
    text: "Sign Up",
    variant: "outlined",
  },
};