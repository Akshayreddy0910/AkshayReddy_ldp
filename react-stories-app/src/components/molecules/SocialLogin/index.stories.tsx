import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";

import SocialLogin from ".";
import google from "../../../assets/icons/google.svg";
import stripe from "../../../assets/icons/stripe.svg";
import xero from "../../../assets/icons/xero.svg";

const socialOptions = [
  { icon: google, label: "Google" },
  { icon: stripe, label: "Stripe" },
  { icon: xero, label: "Xero" },
];

const meta: Meta<typeof SocialLogin> = {
  title: "Molecules/SocialLogin",
  component: SocialLogin,
  args: {
    options: socialOptions,
    onSocialClick: fn(),
    onLinkClick: fn(),
  },
};

export default meta;

type Story = StoryObj<typeof SocialLogin>;

export const Default: Story = {};

export const LoginVariant: Story = {
  args: {
    showSignupLink: false,
  },
};
