import { useState } from "react";
import {
  Box,
  Link,
  Typography,
  Snackbar,
  Alert,
  IconButton,
} from "@mui/material";

import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

import Button from "../../atoms/Button";
import InputField from "../../atoms/Input";

import { LOGIN_FORM_TEXT } from "../../../utils/constants";
import {
  validateEmail,
  validatePassword,
} from "../../../utils/validators";
import { loginUser } from "../../../services/authService";

import "./index.css";

const LoginForm = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [emailError, setEmailError] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");

  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const [showSuccess, setShowSuccess] = useState<boolean>(false);
  const [showError, setShowError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const isFormFilled =
    email.trim() !== "" && password.trim() !== "";

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
        setErrorMessage(
          error instanceof Error ? error.message : "Login failed"
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
        startIcon={<MailOutlineOutlinedIcon />}
      />

      <InputField
        name="password"
        placeholder={LOGIN_FORM_TEXT.passwordPlaceholder}
        type={showPassword ? "text" : "password"}
        value={password}
        onChange={handlePasswordChange}
        onBlur={handlePasswordBlur}
        error={Boolean(passwordError)}
        helperText={passwordError}
        startIcon={<LockOutlinedIcon />}
        endIcon={
          <IconButton
            onClick={() => setShowPassword((prev) => !prev)}
          >
            {showPassword ? (
              <VisibilityOffOutlinedIcon />
            ) : (
              <VisibilityOutlinedIcon />
            )}
          </IconButton>
        }
      />

      <Box className="login-form-forgot">
        <Link href="#" underline="none" color="primary">
          {LOGIN_FORM_TEXT.forgotPassword}
        </Link>
      </Box>

      <Button
        text={LOGIN_FORM_TEXT.continueButton}
        type="submit"
        disabled={!isFormFilled || isSubmitting}
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

      <Snackbar
        open={showError}
        autoHideDuration={3000}
        onClose={handleCloseError}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
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

export default LoginForm;