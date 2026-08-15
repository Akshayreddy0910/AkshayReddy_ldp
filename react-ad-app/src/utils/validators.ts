const knownDomains = ["gmail.com", "yahoo.com", "outlook.com", "hotmail.com"];
const countDifferentLetters = (wordA: string, wordB: string): number => {
  let count = 0;
  for (let i = 0; i < wordA.length; i++) {
    if (wordA[i] !== wordB[i]) {
      count++;
    }
  }
  return count;
};
const findCloseDomain = (domain: string): string => {
  for (const knownDomain of knownDomains) {
    if (domain === knownDomain) {
      return "";
    }

    if (domain.length === knownDomain.length) {
      const diff = countDifferentLetters(domain, knownDomain);

      if (diff === 1 || diff === 2) {
        return knownDomain;
      }
    }
  }
  return "";
};

export const validateEmail = (email: string): string => {
  if (!email) {
    return "Email is required";
  }

  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/;

  if (!emailPattern.test(email)) {
    return "Please enter a valid email address";
  }

  const domain = email.split("@")[1].toLowerCase();
  const suggestedDomain = findCloseDomain(domain);

  if (suggestedDomain) {
    return `Did you mean ${suggestedDomain}?`;
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
