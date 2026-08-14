import type { Meta, StoryObj } from "@storybook/react-vite";

import Icon from ".";
import logo from "../../../assets/icons/logo.svg";
import google from "../../../assets/icons/google.svg";

const meta: Meta<typeof Icon> = {
  title: "Atoms/Icon",
  component: Icon,
};

export default meta;

type Story = StoryObj<typeof Icon>;

export const Logo: Story = {
  args: {
    src: logo,
    alt: "Logo",
    width: 32,
    height: 32,
  },
};

export const Small: Story = {
  args: {
    src: google,
    alt: "Google",
    width: 22,
    height: 22,
  },
};
