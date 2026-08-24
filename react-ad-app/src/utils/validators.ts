const EMAIL_PATTERN =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@(gmail|yahoo|outlook|hotmail)\.com$/i;

export const validateEmail = (email: string): string => {
  if (!email) {
    return "Email is required";
  }

  if (!EMAIL_PATTERN.test(email)) {
    return "Please enter a valid email address";
  }

  return "";
};

export const validatePassword = (password: string): string => {
  if (!password) {
    return "Password is required";
  }

  if (password.length < 8) {
    return "Password must be at least 8 characters long";
  }

  if (!/[A-Z]/.test(password)) {
    return "Password must contain at least one uppercase letter";
  }

  if (!/[0-9]/.test(password)) {
    return "Password must contain at least one number";
  }

  const specialCharPattern = /[!@#$%^&*(),.?":{}|<>]/;

  if (!specialCharPattern.test(password)) {
    return "Password must contain at least one special character";
  }

  return "";
};