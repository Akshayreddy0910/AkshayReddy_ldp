import { createTheme } from "@mui/material/styles";

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
  },

  shape: {
    borderRadius: 10,
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: 10,
          fontWeight: 600,
          boxShadow: "none",
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
