import { useState } from "react";
import { Box, Link, Typography } from "@mui/material";

import Button from "../../atoms/Button";
import InputField from "../../atoms/Input";

import { validateEmail, validatePassword } from "../../../utils/validators";

import "./index.css";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleEmailBlur = () => {
    setEmailError(validateEmail(email));
  };

  const handlePasswordBlur = () => {
    setPasswordError(validatePassword(password));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const emailErrorMessage = validateEmail(email);
    const passwordErrorMessage = validatePassword(password);

    setEmailError(emailErrorMessage);
    setPasswordError(passwordErrorMessage);

    if (!emailErrorMessage && !passwordErrorMessage) {
      console.log("Login form submitted", { email, password });
    }
  };

  return (
    <Box
      component="form"
      className="login-form"
      onSubmit={handleSubmit}
    >
      <Box>
        <Typography
          variant="h4"
          className="login-form-title"
        >
          Login to Seeder ✨
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
        >
          Enter your email and password to login.
        </Typography>
      </Box>

      <InputField
        name="email"
        placeholder="Enter your email"
        type="email"
        value={email}
        onChange={handleEmailChange}
        onBlur={handleEmailBlur}
        error={Boolean(emailError)}
        helperText={emailError}
      />

      <InputField
        name="password"
        placeholder="Enter your password"
        type="password"
        value={password}
        onChange={handlePasswordChange}
        onBlur={handlePasswordBlur}
        error={Boolean(passwordError)}
        helperText={passwordError}
      />

      <Box className="login-form-forgot">
        <Link
          href="#"
          underline="none"
          color="primary"
        >
          Forgot Password?
        </Link>
      </Box>

      <Button
        text="Continue"
        type="submit"
      />
    </Box>
  );
};

export default LoginForm;
