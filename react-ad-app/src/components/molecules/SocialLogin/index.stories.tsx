import type { Meta, StoryObj } from "@storybook/react-vite";
import SocialLogin from ".";

const meta: Meta<typeof SocialLogin> = {
  title: "Molecules/SocialLogin",
  component: SocialLogin,
};

export default meta;

type Story = StoryObj<typeof SocialLogin>;

export const Default: Story = {};