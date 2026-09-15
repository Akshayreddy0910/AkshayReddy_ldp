import { Button } from "@mui/material";
import type { ReactNode } from "react";

interface ButtonProps {
  text: string;
  variant?: "contained" | "outlined";
  fullWidth?: boolean;
  startIcon?: ReactNode;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
}

const CustomButton = ({
  text,
  variant = "contained",
  fullWidth = true,
  startIcon,
  onClick,
  type = "button",
  disabled = false,
}: ButtonProps) => {
  return (
    <Button
      type={type}
      variant={variant}
      fullWidth={fullWidth}
      startIcon={startIcon}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </Button>
  );
};

export default CustomButton;