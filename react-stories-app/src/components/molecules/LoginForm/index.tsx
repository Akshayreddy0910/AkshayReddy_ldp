import type { ChangeEvent, FocusEvent, FormEvent } from "react";

import Input from "../../atoms/Input";
import Button from "../../atoms/Button";

interface LoginFormProps {
  email: string;
  password: string;
  emailError?: string;
  passwordError?: string;
  showPassword?: boolean;
  onEmailChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onPasswordChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onEmailBlur?: (event: FocusEvent<HTMLInputElement>) => void;
  onPasswordBlur?: (event: FocusEvent<HTMLInputElement>) => void;
  onToggleShowPassword?: () => void;
  onForgotPasswordClick?: () => void;
  onSubmit?: (event: FormEvent<HTMLFormElement>) => void;
  className?: string;
}

const LoginForm = ({
  email,
  password,
  emailError,
  passwordError,
  showPassword = false,
  onEmailChange,
  onPasswordChange,
  onEmailBlur,
  onPasswordBlur,
  onToggleShowPassword,
  onForgotPasswordClick,
  onSubmit,
  className = "",
}: LoginFormProps) => {
  return (
    <form className={["login-form", className].filter(Boolean).join(" ")} onSubmit={onSubmit}>
      <div className="login-form__header">
        <h1 className="login-form__title">Login to Seeder</h1>
        <p className="login-form__subtitle">Enter your email and password to login.</p>
      </div>

      <Input
        name="email"
        placeholder="Enter your email"
        type="email"
        value={email}
        onChange={onEmailChange}
        onBlur={onEmailBlur}
        error={Boolean(emailError)}
        helperText={emailError}
      />

      <Input
        name="password"
        placeholder="Enter your password"
        type={showPassword ? "text" : "password"}
        value={password}
        onChange={onPasswordChange}
        onBlur={onPasswordBlur}
        error={Boolean(passwordError)}
        helperText={passwordError}
        endAdornment={
          <button type="button" className="login-form__toggle-password" onClick={onToggleShowPassword}>
            {showPassword ? "Hide" : "Show"}
          </button>
        }
      />

      <div className="login-form__forgot">
        <a href="#" onClick={onForgotPasswordClick}>
          Forgot Password?
        </a>
      </div>

      <Button label="Continue" type="submit" />
    </form>
  );
};

export default LoginForm;
