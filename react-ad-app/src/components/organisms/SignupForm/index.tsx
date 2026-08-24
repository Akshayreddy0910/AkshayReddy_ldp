import { useState } from "react";
import { Box, Typography, Snackbar, Alert } from "@mui/material";

import Button from "../../atoms/Button";
import InputField from "../../atoms/Input";

import { SIGNUP_FORM_TEXT } from "../../../utils/constants";
import {
  validateEmail,
  validatePassword,
} from "../../../utils/validators";

import { signupUser } from "../../../services/authService";

import "./index.css";

const SignupForm = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [nameError, setNameError] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [showSuccess, setShowSuccess] = useState<boolean>(false);
  const [showError, setShowError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const isFormFilled =
    name.trim() !== "" &&
    email.trim() !== "" &&
    password.trim() !== "";

  const handleNameChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setName(event.target.value);
  };

  const handleEmailChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
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

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const nameErrorMessage = name
      ? ""
      : SIGNUP_FORM_TEXT.nameRequired;

    const emailErrorMessage = validateEmail(email);
    const passwordErrorMessage = validatePassword(password);

    setNameError(nameErrorMessage);
    setEmailError(emailErrorMessage);
    setPasswordError(passwordErrorMessage);

    if (
      !nameErrorMessage &&
      !emailErrorMessage &&
      !passwordErrorMessage
    ) {
      setIsSubmitting(true);

      try {
        const user = await signupUser(name, email, password);
        console.log("Signup successful", user);
        setShowSuccess(true);
      } catch (error) {
        setErrorMessage(
          error instanceof Error ? error.message : "Signup failed"
        );
        setShowError(true);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const handleCloseSuccess = () => {
    setShowSuccess(false);
  };

  const handleCloseError = () => {
    setShowError(false);
  };

  return (
    <Box
      component="form"
      className="signup-form"
      onSubmit={handleSubmit}
    >
      <Box>
        <Typography
          variant="h4"
          className="signup-form-title"
        >
          {SIGNUP_FORM_TEXT.title}
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
        >
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
        disabled={!isFormFilled || isSubmitting}
      />

      <Snackbar
        open={showSuccess}
        autoHideDuration={3000}
        onClose={handleCloseSuccess}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <Alert
          onClose={handleCloseSuccess}
          severity="success"
          variant="filled"
        >
          {SIGNUP_FORM_TEXT.successMessage}
        </Alert>
      </Snackbar>

      <Snackbar
        open={showError}
        autoHideDuration={3000}
        onClose={handleCloseError}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <Alert
          onClose={handleCloseError}
          severity="error"
          variant="filled"
        >
          {errorMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default SignupForm;