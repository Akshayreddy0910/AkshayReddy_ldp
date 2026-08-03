import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

const Chips = () => {
  return (
    <Stack direction="row" spacing={2}>
      <Chip label="React" />
      <Chip label="Material UI" color="primary" />
      <Chip label="Delete" color="error" />
    </Stack>
  );
};

export default Chips;
