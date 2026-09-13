import MuiTypography from "@mui/material/Typography";
import type { TypographyVariant } from "@mui/material/styles";
import type { SxProps, Theme } from "@mui/material/styles";

type CustomVariant = "heading" | "subheading" | "label" | "link";

interface TypographyProps {
  text: string;
  variant?: TypographyVariant | CustomVariant;
  sx?: SxProps<Theme>;
}

const Typography = ({ text, variant = "body1", sx }: TypographyProps) => {
  return (
    <MuiTypography variant={variant} sx={sx}>
      {text}
    </MuiTypography>
  );
};

export default Typography;
