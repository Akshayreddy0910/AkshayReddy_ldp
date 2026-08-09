import type { CSSProperties } from "react";

interface ButtonProps {
  label: string;
  onClick?: () => void;
  style?: CSSProperties;
}

const Button = ({ label, onClick, style }: ButtonProps) => {
  return (
    <button onClick={onClick} style={style}>
      {label}
    </button>
  );
};

export default Button;
