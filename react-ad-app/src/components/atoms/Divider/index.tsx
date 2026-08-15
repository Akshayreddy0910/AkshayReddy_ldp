import { Divider, Stack, Typography } from "@mui/material";

import "./index.css";

const CustomDivider = () => {
  return (
    <Stack
      direction="row"
      className="custom-divider"
    >
      <Divider className="custom-divider-line" />

      <Typography variant="body2" color="text.secondary">
        Or
      </Typography>

      <Divider className="custom-divider-line" />
    </Stack>
  );
};

export default CustomDivider;
