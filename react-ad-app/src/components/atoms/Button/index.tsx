import { Button } from "@mui/material";
import type { ReactNode } from "react";

import "./index.css";

interface ButtonProps {
  text: string;
  variant?: "contained" | "outlined";
  fullWidth?: boolean;
  startIcon?: ReactNode;
  onClick?: () => void;
  type?: "button" | "submit";
}

const CustomButton = ({
  text,
  variant = "contained",
  fullWidth = true,
  startIcon,
  onClick,
  type = "button",
}: ButtonProps) => {
  const variantClass =
    variant === "contained" ? "button-contained" : "button-outlined";

  return (
    <Button
      type={type}
      variant={variant}
      fullWidth={fullWidth}
      startIcon={startIcon}
      onClick={onClick}
      className={`custom-button ${variantClass}`}
    >
      {text}
    </Button>
  );
};

export default CustomButton;
