import MuiButton from "@mui/material/Button";
import type { SxProps, Theme } from "@mui/material/styles";

interface ButtonProps {
  label: string;
  onClick?: () => void;
  sx?: SxProps<Theme>;
}

const Button = ({ label, onClick, sx }: ButtonProps) => {
  return (
    <MuiButton onClick={onClick} sx={sx}>
      {label}
    </MuiButton>
  );
};

export default Button;
