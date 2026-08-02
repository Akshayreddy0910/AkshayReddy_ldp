import MuiTypography from "@mui/material/Typography";

interface TypographyProps {
  text: string;
  variant?: "title" | "label" | "body" | "small";
  bold?: boolean;
  color?: string;
}

const Typography = ({ text, variant = "body", bold = false, color }: TypographyProps) => {
  const getMuiVariant = (): "h5" | "body2" | "caption" | "body1" => {
    if (variant === "title") return "h5";
    if (variant === "label") return "body2";
    if (variant === "small") return "caption";
    return "body1";
  };

  const getColor = () => {
    if (color) return color;
    return bold ? "#0A0B0D" : "#696A6E";
  };

  return (
    <MuiTypography
      variant={getMuiVariant()}
      sx={{ fontWeight: bold ? "bold" : "normal", textAlign: "left", color: getColor() }}
    >
      {text}
    </MuiTypography>
  );
};

export default Typography;