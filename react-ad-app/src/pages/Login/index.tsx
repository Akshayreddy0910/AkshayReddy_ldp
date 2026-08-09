import { Box } from "@mui/material";

import LoginForm from "../../components/molecules/LoginForm";
import SocialLogin from "../../components/molecules/SocialLogin";

import backgroundImage from "../../assets/images/login-image.png";
import logo from "../../assets/icons/logo.svg";

import "./index.css";

const Login = () => {
  return (
    <Box className="login-page">
      <Box className="login-page-left">
        <Box className="login-page-logo">
          <img
            src={logo}
            alt="Logo"
            width={32}
          />

          <Box
            component="span"
            className="login-page-logo-text"
          >
            Seeder
          </Box>
        </Box>

        <Box className="login-page-illustration-wrap">
          <img
            src={backgroundImage}
            alt="Illustration"
            className="login-page-illustration"
          />
        </Box>
      </Box>

      <Box className="login-page-right">
        <Box className="login-page-right-inner">
          <LoginForm />

          <Box className="login-page-social">
            <SocialLogin />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
