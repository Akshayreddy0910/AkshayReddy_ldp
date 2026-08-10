import type { Meta, StoryObj } from "@storybook/react-vite";

import Divider from ".";

const meta: Meta<typeof Divider> = {
  title: "Atoms/Divider",
  component: Divider,
};

export default meta;

type Story = StoryObj<typeof Divider>;

export const Default: Story = {
  args: {
    label: "Or",
  },
};

export const Plain: Story = {
  args: {},
};
