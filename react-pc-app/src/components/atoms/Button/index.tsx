import MuiButton from "@mui/material/Button";

interface ButtonProps {
  label: string;
  onClick?: () => void;
}

const Button = ({ label, onClick }: ButtonProps) => {
  return (
    <MuiButton variant="contained" color="primary" onClick={onClick}>
      {label}
    </MuiButton>
  );
};

export default Button;