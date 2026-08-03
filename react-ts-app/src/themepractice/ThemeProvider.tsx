import { ThemeProvider } from "@mui/material/styles";
import { Button } from "@mui/material";
import theme from "../theme";

const ThemeProviderDemo = () => {
  return (
    <ThemeProvider theme={theme}>
      <Button variant="contained">Themed Button</Button>
    </ThemeProvider>
  );
};

export default ThemeProviderDemo;
