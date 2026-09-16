import { Box, useTheme } from "@mui/material";
import Icon from "../../components/atoms/Icon";
import LoginForm from "../../components/organisms/LoginForm";
import SocialLogin from "../../components/molecules/SocialLogin";
import backgroundImage from "../../assets/images/login-image.png";
import logo from "../../assets/icons/logo.svg";
import { APP_NAME } from "../../utils/constants";

import "./index.css";

const Login = () => {
  const theme = useTheme();

  return (
    <Box className="login-page">
      <Box
        className="login-page-left"
        sx={{
          backgroundColor: theme.palette.secondary.main,
        }}
      >
        <Box className="login-page-logo">
          <Icon
            src={logo}
            alt="logo"
            width={32}
            height={32}
          />

          <Box
            component="span"
            className="login-page-logo-text"
            sx={{
              color: theme.palette.text.primary,
            }}
          >
            {APP_NAME}
          </Box>
        </Box>

        <Box className="login-page-form">
          <LoginForm />
          <SocialLogin />
        </Box>
      </Box>

      <Box
        className="login-page-right"
        sx={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundColor: theme.palette.background.default,
        }}
      />
    </Box>
  );
};

export default Login;