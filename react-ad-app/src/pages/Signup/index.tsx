import { Box, useTheme } from "@mui/material";

import SignupForm from "../../components/organisms/SignupForm";
import SocialLogin from "../../components/molecules/SocialLogin";

import { APP_NAME } from "../../utils/constants";

import backgroundImage from "../../assets/images/signup-image.png";
import logo from "../../assets/icons/logo.svg";

import "./index.css";

const Signup = () => {
  const theme = useTheme();

  return (
    <Box className="signup-page">
      <Box
        className="signup-page-left"
        sx={{
          backgroundColor: theme.palette.secondary.main,
        }}
      >
        <Box className="signup-page-logo">
          <img
            src={logo}
            alt="Logo"
            width={32}
          />

          <Box
            component="span"
            className="signup-page-logo-text"
            sx={{
              color: theme.palette.text.primary,
            }}
          >
            {APP_NAME}
          </Box>
        </Box>

        <Box className="signup-page-illustration-wrap">
          <img
            src={backgroundImage}
            alt="Illustration"
            className="signup-page-illustration"
          />
        </Box>
      </Box>

      <Box
        className="signup-page-right"
        sx={{
          backgroundColor: theme.palette.background.default,
        }}
      >
        <Box className="signup-page-right-inner">
          <SignupForm />

          <Box className="signup-page-social">
            <SocialLogin showSignupLink={false} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Signup;
