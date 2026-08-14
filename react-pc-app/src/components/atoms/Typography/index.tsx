import MuiTypography from "@mui/material/Typography";
import type { SxProps, Theme } from "@mui/material/styles";

interface TypographyProps {
  text: string;
  sx?: SxProps<Theme>;
}

const Typography = ({ text, sx }: TypographyProps) => {
  return <MuiTypography sx={sx}>{text}</MuiTypography>;
};

export default Typography;