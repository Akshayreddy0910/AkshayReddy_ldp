import { useState } from "react";
import { Box, Link, Typography, Snackbar, Alert } from "@mui/material";

import Button from "../../atoms/Button";
import InputField from "../../atoms/Input";

import { LOGIN_FORM_TEXT } from "../../../utils/constants";
import { validateEmail, validatePassword } from "../../../utils/validators";

import "./index.css";

const LoginForm = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [emailError, setEmailError] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");

  const [showSuccess, setShowSuccess] = useState<boolean>(false);

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
      setShowSuccess(true);
    }
  };

  const handleCloseSuccess = () => {
    setShowSuccess(false);
  };

  return (
    <Box component="form" className="login-form" onSubmit={handleSubmit}>
      <Box>
        <Typography variant="h4" className="login-form-title">
          {LOGIN_FORM_TEXT.title}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          {LOGIN_FORM_TEXT.description}
        </Typography>
      </Box>

      <InputField
        name="email"
        placeholder={LOGIN_FORM_TEXT.emailPlaceholder}
        type="email"
        value={email}
        onChange={handleEmailChange}
        onBlur={handleEmailBlur}
        error={Boolean(emailError)}
        helperText={emailError}
      />

      <InputField
        name="password"
        placeholder={LOGIN_FORM_TEXT.passwordPlaceholder}
        type="password"
        value={password}
        onChange={handlePasswordChange}
        onBlur={handlePasswordBlur}
        error={Boolean(passwordError)}
        helperText={passwordError}
      />

      <Box className="login-form-forgot">
        <Link href="#" underline="none" color="primary">
          {LOGIN_FORM_TEXT.forgotPassword}
        </Link>
      </Box>

      <Button
        text={LOGIN_FORM_TEXT.continueButton}
        type="submit"
      />

      <Snackbar
        open={showSuccess}
        autoHideDuration={3000}
        onClose={handleCloseSuccess}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={handleCloseSuccess}
          severity="success"
          variant="filled"
        >
          {LOGIN_FORM_TEXT.successMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default LoginForm;