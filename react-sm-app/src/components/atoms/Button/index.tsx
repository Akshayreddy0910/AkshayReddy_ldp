import MuiButton from "@mui/material/Button";
import type { ReactNode } from "react";

interface ButtonProps {
  label: string;
  variant?: "primary" | "outline";
  icon?: ReactNode;
  onClick?: () => void;
}

const Button = ({
  label,
  variant = "outline",
  icon,
  onClick,
}: ButtonProps) => {
  return (
    <MuiButton
      variant={variant === "primary" ? "contained" : "outlined"}
      color="primary"
      startIcon={icon}
      onClick={onClick}
      sx={{
        fontFamily: "Inter",
        fontWeight: 600,
        fontSize: "14px",
        textTransform: "none",
        borderRadius: "8px",
        height: "40px",
        px: 2.5,
        minWidth: label ? "120px" : "40px",

        ...(variant === "outline" && {
          backgroundColor: "#FFFFFF",
          borderColor: "divider",
          color: "text.primary",

          "&:hover": {
            backgroundColor: "#F8FAFC",
            borderColor: "primary.main",
          },
        }),

        ...(variant === "primary" && {
          "&:hover": {
            backgroundColor: "primary.dark",
          },
        }),
      }}
    >
      {label}
    </MuiButton>
  );
};

export default Button;