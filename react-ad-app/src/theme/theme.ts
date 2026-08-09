import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#6C5DD3",
    },

    secondary: {
      main: "#393552",
    },

    background: {
      default: "#1E1E23",
      paper: "#393552",
    },

    text: {
      primary: "#FFFFFF",
      secondary: "#A3A3A3",
    },

    divider: "#3A3641",
  },

  typography: {
    fontFamily: "Gilroy, sans-serif",

    h3: {
      fontSize: "42px",
      fontWeight: 700,
    },

    h4: {
      fontSize: "24px",
      fontWeight: 600,
    },

    h5: {
      fontSize: "18px",
      fontWeight: 600,
    },

    body1: {
      fontSize: "16px",
      fontWeight: 400,
    },

    body2: {
      fontSize: "14px",
      fontWeight: 400,
    },

    button: {
      fontSize: "16px",
      fontWeight: 600,
      textTransform: "none",
    },
  },

  shape: {
    borderRadius: 10,
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          height: 48,
          textTransform: "none",
          fontWeight: 600,
        },
      },
    },

    MuiTextField: {
      defaultProps: {
        variant: "outlined",
        fullWidth: true,
      },
    },

    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          backgroundColor: "#2A272E",
          borderRadius: 10,

          "& fieldset": {
            borderColor: "#3A3641",
          },

          "&:hover fieldset": {
            borderColor: "#6C5DD3",
          },

          "&.Mui-focused fieldset": {
            borderColor: "#6C5DD3",
          },
        },

        input: {
          color: "#FFFFFF",
        },
      },
    },

    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: "#A3A3A3",
        },
      },
    },
  },
});

export default theme;