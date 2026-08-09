import MuiTypography from "@mui/material/Typography";
import type { SxProps, Theme } from "@mui/material/styles";

interface TypographyProps {
  text: string;
  variant?: "heading" | "subheading" | "label" | "body";
  sx?: SxProps<Theme>;
}

const Typography = ({ text, variant = "body", sx }: TypographyProps) => {
  const muiVariant = variant === "body" ? "body1" : (variant as any);
  return (
    <MuiTypography variant={muiVariant} sx={sx}>
      {text}
    </MuiTypography>
  );
};

export default Typography;
