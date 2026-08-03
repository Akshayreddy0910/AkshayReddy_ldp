import { Stack, TextField } from "@mui/material";

const TextFields = () => {
  return (
    <Stack spacing={2}>
      <TextField label="Name" />
      <TextField label="Email" />
      <TextField label="Password" type="password" />
    </Stack>
  );
};

export default TextFields;
