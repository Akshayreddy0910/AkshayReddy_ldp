import { useState } from "react";
import { Box, Typography, Snackbar, Alert } from "@mui/material";

import Button from "../../atoms/Button";
import InputField from "../../atoms/Input";

import { validateEmail, validatePassword } from "../../../utils/validators";
import { signupUser } from "../../../services/authService";

import "./index.css";

const SignupForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // button stays disabled until all three fields have something typed in them
  const isFormFilled =
    name.trim() !== "" && email.trim() !== "" && password.trim() !== "";

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
    setNameError(name ? "" : "Name is required");
  };

  const handleEmailBlur = () => {
    setEmailError(validateEmail(email));
  };

  const handlePasswordBlur = () => {
    setPasswordError(validatePassword(password));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const nameErrorMessage = name ? "" : "Name is required";
    const emailErrorMessage = validateEmail(email);
    const passwordErrorMessage = validatePassword(password);

    setNameError(nameErrorMessage);
    setEmailError(emailErrorMessage);
    setPasswordError(passwordErrorMessage);

    if (!nameErrorMessage && !emailErrorMessage && !passwordErrorMessage) {
      setIsSubmitting(true);

      try {
        const user = await signupUser(name, email, password);
        console.log("Signup successful", user);
        setShowSuccess(true);
      } catch (error) {
        setErrorMessage(error instanceof Error ? error.message : "Signup failed");
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
    <Box component="form" className="signup-form" onSubmit={handleSubmit}>
      <Box>
        <Typography variant="h4" className="signup-form-title">
          Sign Up ✨
        </Typography>
      </Box>

      <InputField
        name="name"
        placeholder="Your Name"
        value={name}
        onChange={handleNameChange}
        onBlur={handleNameBlur}
        error={Boolean(nameError)}
        helperText={nameError}
      />

      <InputField
        name="email"
        placeholder="Email Address"
        type="email"
        value={email}
        onChange={handleEmailChange}
        onBlur={handleEmailBlur}
        error={Boolean(emailError)}
        helperText={emailError}
      />

      <InputField
        name="password"
        placeholder="Password"
        type="password"
        value={password}
        onChange={handlePasswordChange}
        onBlur={handlePasswordBlur}
        error={Boolean(passwordError)}
        helperText={passwordError}
      />

      <Button
        text={isSubmitting ? "Signing up..." : "Sign Up"}
        type="submit"
        disabled={!isFormFilled || isSubmitting}
      />

      <Snackbar
        open={showSuccess}
        autoHideDuration={3000}
        onClose={handleCloseSuccess}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert onClose={handleCloseSuccess} severity="success" variant="filled">
          Signup successful!
        </Alert>
      </Snackbar>

      <Snackbar
        open={showError}
        autoHideDuration={3000}
        onClose={handleCloseError}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert onClose={handleCloseError} severity="error" variant="filled">
          {errorMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default SignupForm;