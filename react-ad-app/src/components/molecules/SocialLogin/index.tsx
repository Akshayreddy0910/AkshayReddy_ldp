import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import CustomDivider from "../../atoms/Divider";
import Icon from "../../atoms/Icon";

import google from "../../../assets/icons/google.svg";
import stripe from "../../../assets/icons/stripe.svg";
import xero from "../../../assets/icons/xero.svg";

import {
  SOCIAL_LOGIN_OPTIONS,
  SOCIAL_LOGIN_TEXT,
} from "../../../utils/constants";

import "./index.css";

interface SocialLoginProps {
  showSignupLink?: boolean;
}

const SocialLogin = ({
  showSignupLink = true,
}: SocialLoginProps) => {
  const socialOptions = [
    {
      ...SOCIAL_LOGIN_OPTIONS[0],
      icon: google,
    },
    {
      ...SOCIAL_LOGIN_OPTIONS[1],
      icon: stripe,
    },
    {
      ...SOCIAL_LOGIN_OPTIONS[2],
      icon: xero,
    },
  ];

  return (
    <Box className="social-login">
      <CustomDivider />

      <Box className="social-login-buttons">
        {socialOptions.map((item) => (
          <Button
            key={item.text}
            className="social-login-button"
          >
            <Icon
              src={item.icon}
              alt={item.text}
              width={22}
              height={22}
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
            {SOCIAL_LOGIN_TEXT.signupPrompt}{" "}
            <Link
              to="/signup"
              className="social-login-link"
            >
              {SOCIAL_LOGIN_TEXT.signupLink}
            </Link>
          </>
        ) : (
          <>
            {SOCIAL_LOGIN_TEXT.loginPrompt}{" "}
            <Link
              to="/"
              className="social-login-link"
            >
              {SOCIAL_LOGIN_TEXT.loginLink}
            </Link>
          </>
        )}
      </Typography>
    </Box>
  );
};

export default SocialLogin;