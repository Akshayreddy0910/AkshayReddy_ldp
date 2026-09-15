import { Divider, Stack, styled, Typography } from "@mui/material";

const DividerLine = styled(Divider)({
  flex: 1,
});

const CustomDivider = () => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      gap={2}
    >
      <DividerLine />

      <Typography variant="body2" color="text.secondary">
        Or
      </Typography>

      <DividerLine />
    </Stack>
  );
};

export default CustomDivider;