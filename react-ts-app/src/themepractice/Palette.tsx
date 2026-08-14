import { Button, Stack } from "@mui/material";

const Palette = () => {
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="contained" color="primary">
        Primary
      </Button>

      <Button variant="contained" color="secondary">
        Secondary
      </Button>

      <Button variant="contained" color="error">
        Error
      </Button>

      <Button variant="contained" color="success">
        Success
      </Button>
    </Stack>
  );
};

export default Palette;
