import { Stack, Button } from "@mui/material";

const Buttons = () => {
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="text">Text</Button>

      <Button variant="contained">Contained</Button>

      <Button variant="outlined">Outlined</Button>
    </Stack>
  );
};

export default Buttons;
