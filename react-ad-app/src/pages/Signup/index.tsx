import { Box } from "@mui/material";

import SignupForm from "../../components/molecules/SignupForm";
import SocialLogin from "../../components/molecules/SocialLogin";

import backgroundImage from "../../assets/images/signup-image.png";
import logo from "../../assets/icons/logo.svg";

import "./index.css";

const Signup = () => {
  return (
    <Box className="signup-page">
      <Box className="signup-page-left">
        <Box className="signup-page-logo">
          <img
            src={logo}
            alt="Logo"
            width={32}
          />

          <Box
            component="span"
            className="signup-page-logo-text"
          >
            Seeder
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

      <Box className="signup-page-right">
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
