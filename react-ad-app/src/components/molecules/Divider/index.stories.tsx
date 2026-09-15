import type { Meta, StoryObj } from "@storybook/react-vite";
import CustomDivider from ".";

const meta: Meta<typeof CustomDivider> = {
  title: "Molecules/Divider",
  component: CustomDivider,
};

export default meta;

type Story = StoryObj<typeof CustomDivider>;

export const Default: Story = {};