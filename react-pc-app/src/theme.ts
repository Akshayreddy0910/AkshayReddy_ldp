import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#224DFF",
    },
    secondary: {
      main: "#994D5B",
    },
    text: {
      primary: "#696A6E",
      secondary: "#696A6E",
    },
  },
  typography: {
    fontFamily: "Inter",
    h5: {
      fontWeight: 500,
      fontSize: "16px",
      lineHeight: "24px",
    },
    body1: {
      fontWeight: 400,
      fontSize: "14px",
      lineHeight: "20px",
    },
    body2: {
      fontWeight: 400,
      fontSize: "14px",
      lineHeight: "20px",
    },
    caption: {
      fontWeight: 400,
      fontSize: "12px",
      lineHeight: "18px",
    },
  },
  shape: {
    borderRadius: 6,
  },
});

export default theme;