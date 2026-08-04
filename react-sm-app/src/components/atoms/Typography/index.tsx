import MuiTypography from "@mui/material/Typography";

interface TypographyProps {
  text: string;
  variant?: "heading" | "subheading" | "label" | "body" | "link";
  bold?: boolean;
}

const Typography = ({
  text,
  variant = "body",
  bold = false,
}: TypographyProps) => {
  const getStyles = () => {
    switch (variant) {
      case "heading":
        return {
          fontSize: "36px",
          fontWeight: 700,
          color: "#1F2937",
        };

      case "subheading":
        return {
          fontSize: "20px",
          fontWeight: 600,
          color: "#1F2937",
        };

      case "label":
        return {
          fontSize: "13px",
          fontWeight: 600,
          color: "#6B7280",
          textTransform: "uppercase" as const,
        };

      case "link":
        return {
          fontSize: "15px",
          fontWeight: 500,
          color: "#2563EB",
          cursor: "pointer",
          "&:hover": {
            textDecoration: "underline",
          },
        };

      default:
        return {
          fontSize: "14px",
          fontWeight: 400,
          color: "#1F2937",
        };
    }
  };

  return (
    <MuiTypography
      sx={{
        fontFamily: "Inter",
        ...getStyles(),
        fontWeight: bold ? 700 : getStyles().fontWeight,
      }}
    >
      {text}
    </MuiTypography>
  );
};

export default Typography;