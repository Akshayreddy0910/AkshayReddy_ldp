import type { ChangeEvent, FocusEvent, FormEvent } from "react";

import Input from "../../atoms/Input";
import Button from "../../atoms/Button";

interface SignupFormProps {
  name: string;
  email: string;
  password: string;
  nameError?: string;
  emailError?: string;
  passwordError?: string;
  showPassword?: boolean;
  onNameChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onEmailChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onPasswordChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onNameBlur?: (event: FocusEvent<HTMLInputElement>) => void;
  onEmailBlur?: (event: FocusEvent<HTMLInputElement>) => void;
  onPasswordBlur?: (event: FocusEvent<HTMLInputElement>) => void;
  onToggleShowPassword?: () => void;
  onSubmit?: (event: FormEvent<HTMLFormElement>) => void;
  className?: string;
}

const SignupForm = ({
  name,
  email,
  password,
  nameError,
  emailError,
  passwordError,
  showPassword = false,
  onNameChange,
  onEmailChange,
  onPasswordChange,
  onNameBlur,
  onEmailBlur,
  onPasswordBlur,
  onToggleShowPassword,
  onSubmit,
  className = "",
}: SignupFormProps) => {
  return (
    <form className={["signup-form", className].filter(Boolean).join(" ")} onSubmit={onSubmit}>
      <div className="signup-form__header">
        <h1 className="signup-form__title">Sign Up</h1>
        <p className="signup-form__subtitle">Enter your details to create your account.</p>
      </div>

      <Input
        name="name"
        placeholder="Your Name"
        value={name}
        onChange={onNameChange}
        onBlur={onNameBlur}
        error={Boolean(nameError)}
        helperText={nameError}
      />

      <Input
        name="email"
        placeholder="Email Address"
        type="email"
        value={email}
        onChange={onEmailChange}
        onBlur={onEmailBlur}
        error={Boolean(emailError)}
        helperText={emailError}
      />

      <Input
        name="password"
        placeholder="Password"
        type={showPassword ? "text" : "password"}
        value={password}
        onChange={onPasswordChange}
        onBlur={onPasswordBlur}
        error={Boolean(passwordError)}
        helperText={passwordError}
        endAdornment={
          <button type="button" className="signup-form__toggle-password" onClick={onToggleShowPassword}>
            {showPassword ? "Hide" : "Show"}
          </button>
        }
      />

      <Button label="Sign Up" type="submit" />
    </form>
  );
};

export default SignupForm;
