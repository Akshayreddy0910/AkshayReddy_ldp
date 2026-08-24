import { useState } from "react";
import { Box, Typography, Snackbar, Alert } from "@mui/material";

import Button from "../../atoms/Button";
import InputField from "../../atoms/Input";

import { SIGNUP_FORM_TEXT } from "../../../utils/constants";
import {
  validateEmail,
  validatePassword,
} from "../../../utils/validators";

import "./index.css";

const SignupForm = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [nameError, setNameError] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");

  const [showSuccess, setShowSuccess] = useState<boolean>(false);

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleNameBlur = () => {
    setNameError(name ? "" : SIGNUP_FORM_TEXT.nameRequired);
  };

  const handleEmailBlur = () => {
    setEmailError(validateEmail(email));
  };

  const handlePasswordBlur = () => {
    setPasswordError(validatePassword(password));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const nameErrorMessage = name ? "" : SIGNUP_FORM_TEXT.nameRequired;
    const emailErrorMessage = validateEmail(email);
    const passwordErrorMessage = validatePassword(password);

    setNameError(nameErrorMessage);
    setEmailError(emailErrorMessage);
    setPasswordError(passwordErrorMessage);

    if (!nameErrorMessage && !emailErrorMessage && !passwordErrorMessage) {
      setShowSuccess(true);
    }
  };

  const handleCloseSuccess = () => {
    setShowSuccess(false);
  };

  return (
    <Box component="form" className="signup-form" onSubmit={handleSubmit}>
      <Box>
        <Typography variant="h4" className="signup-form-title">
          {SIGNUP_FORM_TEXT.title}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          {SIGNUP_FORM_TEXT.description}
        </Typography>
      </Box>

      <InputField
        name="name"
        placeholder={SIGNUP_FORM_TEXT.namePlaceholder}
        value={name}
        onChange={handleNameChange}
        onBlur={handleNameBlur}
        error={Boolean(nameError)}
        helperText={nameError}
      />

      <InputField
        name="email"
        placeholder={SIGNUP_FORM_TEXT.emailPlaceholder}
        type="email"
        value={email}
        onChange={handleEmailChange}
        onBlur={handleEmailBlur}
        error={Boolean(emailError)}
        helperText={emailError}
      />

      <InputField
        name="password"
        placeholder={SIGNUP_FORM_TEXT.passwordPlaceholder}
        type="password"
        value={password}
        onChange={handlePasswordChange}
        onBlur={handlePasswordBlur}
        error={Boolean(passwordError)}
        helperText={passwordError}
      />

      <Button
        text={SIGNUP_FORM_TEXT.signUpButton}
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
          {SIGNUP_FORM_TEXT.successMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default SignupForm;