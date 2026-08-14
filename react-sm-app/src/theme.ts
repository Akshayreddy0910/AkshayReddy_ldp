import { createTheme } from "@mui/material/styles";

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    heading: true;
    subheading: true;
    label: true;
    link: true;
  }
}

declare module "@mui/material/styles" {
  interface TypographyVariants {
    heading: React.CSSProperties;
    subheading: React.CSSProperties;
    label: React.CSSProperties;
    link: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    heading?: React.CSSProperties;
    subheading?: React.CSSProperties;
    label?: React.CSSProperties;
    link?: React.CSSProperties;
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: "#224DFF",
    },

    secondary: {
      main: "#64748B",
    },

    success: {
      main: "#17A076",
      light: "#DDF8EE",
    },

    warning: {
      main: "#A08817",
      light: "#FFF4D6",
    },

    background: {
      default: "#F8FAFC",
      paper: "#FFFFFF",
    },

    text: {
      primary: "#1F2937",
      secondary: "#6B7280",
    },

    divider: "#E5E7EB",
  },

  typography: {
    fontFamily: "Inter, sans-serif",

    h4: {
      fontSize: "36px",
      fontWeight: 700,
    },

    h6: {
      fontSize: "22px",
      fontWeight: 600,
    },

    body1: {
      fontSize: "14px",
      fontWeight: 400,
    },

    body2: {
      fontSize: "13px",
      fontWeight: 400,
    },

    caption: {
      fontSize: "12px",
      fontWeight: 500,
      color: "#6B7280",
    },

    heading: {
      fontFamily: "Inter, sans-serif",
      fontSize: "36px",
      fontWeight: 700,
      color: "#1F2937",
    },

    subheading: {
      fontFamily: "Inter, sans-serif",
      fontSize: "20px",
      fontWeight: 600,
      color: "#1F2937",
    },

    label: {
      fontFamily: "Inter, sans-serif",
      fontSize: "13px",
      fontWeight: 600,
      color: "#6B7280",
      textTransform: "uppercase",
    },

    link: {
      fontFamily: "Inter, sans-serif",
      fontSize: "15px",
      fontWeight: 500,
      color: "#224DFF",
      cursor: "pointer",
    },
  },

  shape: {
    borderRadius: 10,
  },

  components: {
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          heading: "h4",
          subheading: "h6",
          label: "span",
          link: "span",
        },
      },
      styleOverrides: {
        root: {
          "&.MuiTypography-link:hover": {
            textDecoration: "underline",
          },
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: 10,
          fontWeight: 600,
          fontSize: "14px",
          boxShadow: "none",
          height: 40,
          paddingLeft: 20,
          paddingRight: 20,

          "&.MuiButton-outlined": {
            backgroundColor: "#FFFFFF",

            "&:hover": {
              backgroundColor: "#F8FAFC",
            },
          },

          "&.MuiButton-contained:hover": {
            backgroundColor: "#1B3ECC",
          },
        },
      },
    },

    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            height: 42,
            borderRadius: 8,
          },
        },
      },
    },

    MuiChip: {
      styleOverrides: {
        root: {
          height: 28,
          minWidth: 90,
          borderRadius: 6,
          fontSize: "12px",
          fontWeight: 600,
          letterSpacing: "0.4px",

          "&.MuiChip-colorSuccess": {
            backgroundColor: "#DDF8EE",
            color: "#17A076",
          },

          "&.MuiChip-colorWarning": {
            backgroundColor: "#FFF4D6",
            color: "#A08817",
          },
        },
        label: {
          paddingLeft: 12,
          paddingRight: 12,
        },
      },
    },

    MuiListItemIcon: {
      styleOverrides: {
        root: {
          minWidth: 36,
          color: "inherit",
        },
      },
    },

    MuiListItemButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          marginBottom: 4,
          paddingLeft: 16,
          paddingRight: 16,
          paddingTop: 9.6,
          paddingBottom: 9.6,

          "&.Mui-selected": {
            backgroundColor: "#EEF4FF",
            color: "#224DFF",
          },

          "&.Mui-selected .MuiTypography-root": {
            fontWeight: 600,
          },

          "&.Mui-selected:hover": {
            backgroundColor: "#E4EEFF",
          },

          "&:hover": {
            backgroundColor: "#F8FAFC",
          },
        },
      },
    },

    MuiDrawer: {
      styleOverrides: {
        paper: {
          borderRight: "1px solid #E5E7EB",
        },
      },
    },

    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: "0px 2px 12px rgba(0,0,0,0.04)",
        },
      },
    },

    MuiTableCell: {
      styleOverrides: {
        head: {
          fontWeight: 600,
          fontSize: "12px",
          color: "#6B7280",
          backgroundColor: "#FAFAFA",
          paddingTop: 14,
          paddingBottom: 14,
        },

        body: {
          fontSize: "14px",
          paddingTop: 16,
          paddingBottom: 16,
        },
      },
    },
  },
});

export default theme;
