import type { ReactNode } from "react";

interface ButtonProps {
  label: string;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary";
  fullWidth?: boolean;
  disabled?: boolean;
  startIcon?: ReactNode;
  onClick?: () => void;
  className?: string;
}

const Button = ({
  label,
  type = "button",
  variant = "primary",
  fullWidth = true,
  disabled = false,
  startIcon,
  onClick,
  className = "",
}: ButtonProps) => {
  const classes = [
    "button",
    `button--${variant}`,
    fullWidth ? "button--full-width" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button type={type} className={classes} onClick={onClick} disabled={disabled}>
      {startIcon}
      <span>{label}</span>
    </button>
  );
};

export default Button;
