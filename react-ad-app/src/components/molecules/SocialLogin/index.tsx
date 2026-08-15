import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import CustomDivider from "../../atoms/Divider";

import google from "../../../assets/icons/google.svg";
import stripe from "../../../assets/icons/stripe.svg";
import xero from "../../../assets/icons/xero.svg";

import "./index.css";

interface SocialLoginProps {
  showSignupLink?: boolean;
}

const socialOptions = [
  { icon: google, text: "Google" },
  { icon: stripe, text: "Stripe" },
  { icon: xero, text: "Xero" },
];

const SocialLogin = ({
  showSignupLink = true,
}: SocialLoginProps) => {
  return (
    <Box className="social-login">
      <CustomDivider />

      <Box className="social-login-buttons">
        {socialOptions.map((item) => (
          <Button
            key={item.text}
            className="social-login-button"
          >
            <img
              src={item.icon}
              alt={item.text}
              width={22}
            />

            <Typography variant="body2">
              {item.text}
            </Typography>
          </Button>
        ))}
      </Box>

      <Typography
        variant="body2"
        align="center"
        color="text.secondary"
      >
        {showSignupLink ? (
          <>
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="social-login-link"
            >
              Sign Up
            </Link>
          </>
        ) : (
          <>
            Already have an account?{" "}
            <Link
              to="/"
              className="social-login-link"
            >
              Login
            </Link>
          </>
        )}
      </Typography>
    </Box>
  );
};

export default SocialLogin;
