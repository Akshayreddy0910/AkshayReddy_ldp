import type { Meta, StoryObj } from "@storybook/react-vite";
import CustomDivider from ".";

const meta: Meta<typeof CustomDivider> = {
  title: "Atoms/Divider",
  component: CustomDivider,
};

export default meta;

type Story = StoryObj<typeof CustomDivider>;

export const Default: Story = {};