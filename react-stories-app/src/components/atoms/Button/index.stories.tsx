import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";

import Button from ".";

const meta: Meta<typeof Button> = {
  title: "Atoms/Button",
  component: Button,
  args: {
    onClick: fn(),
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    label: "Continue",
  },
};

export const Secondary: Story = {
  args: {
    label: "Sign Up",
    variant: "secondary",
  },
};

export const Disabled: Story = {
  args: {
    label: "Continue",
    disabled: true,
  },
};
