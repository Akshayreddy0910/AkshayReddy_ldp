import { useState } from "react";
import { Box, Link, Typography, Snackbar, Alert } from "@mui/material";

import Button from "../../atoms/Button";
import InputField from "../../atoms/Input";

import { validateEmail, validatePassword } from "../../../utils/validators";
import { loginUser } from "../../../services/authService";

import "./index.css";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // button stays disabled until both fields have something typed in them
  const isFormFilled = email.trim() !== "" && password.trim() !== "";

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

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const emailErrorMessage = validateEmail(email);
    const passwordErrorMessage = validatePassword(password);

    setEmailError(emailErrorMessage);
    setPasswordError(passwordErrorMessage);

    if (!emailErrorMessage && !passwordErrorMessage) {
      setIsSubmitting(true);

      try {
        const user = await loginUser(email, password);
        console.log("Login successful", user);
        setShowSuccess(true);
      } catch (error) {
        setErrorMessage(error instanceof Error ? error.message : "Login failed");
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
    <Box component="form" className="login-form" onSubmit={handleSubmit}>
      <Box>
        <Typography variant="h4" className="login-form-title">
          Login to Seeder ✨
        </Typography>
        <Typography variant="body2" color="text.secondary">
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
        <Link href="#" underline="none" color="primary">
          Forgot Password?
        </Link>
      </Box>

      <Button
        text={isSubmitting ? "Logging in..." : "Continue"}
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
          Login successful!
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

export default LoginForm;