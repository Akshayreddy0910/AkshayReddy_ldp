import MuiButton from "@mui/material/Button";
import type { SxProps, Theme } from "@mui/material/styles";
import type { ReactNode } from "react";

interface ButtonProps {
  label: string;
  variant?: "primary" | "outline";
  icon?: ReactNode;
  onClick?: () => void;
  sx?: SxProps<Theme>;
}

const Button = ({ label, variant = "outline", icon, onClick, sx }: ButtonProps) => {
  return (
    <MuiButton
      variant={variant === "primary" ? "contained" : "outlined"}
      color="primary"
      startIcon={icon}
      onClick={onClick}
      sx={sx}
    >
      {label}
    </MuiButton>
  );
};

export default Button;
