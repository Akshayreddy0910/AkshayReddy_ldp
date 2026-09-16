import type { Meta, StoryObj } from "@storybook/react-vite";
import Icon from ".";
import logo from "../../../assets/icons/logo.svg";

const meta: Meta<typeof Icon> = {
  title: "Atoms/Icon",
  component: Icon,
};

export default meta;

type Story = StoryObj<typeof Icon>;

export const Logo: Story = {
  args: {
    src: logo,
    alt: "Seeder Logo",
    width: 32,
    height: 32,
  },
};