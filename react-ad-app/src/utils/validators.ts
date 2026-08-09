// Simple validation helpers for the login and signup forms

// checks if the email typed by the user looks like a real email
export const validateEmail = (email: string): string => {
  if (!email) {
    return "Email is required";
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(email)) {
    return "Please enter a valid email address";
  }

  return "";
};

// checks password rules one by one
// rule: minimum 8 characters, 1 uppercase letter, 1 number, 1 special character
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
