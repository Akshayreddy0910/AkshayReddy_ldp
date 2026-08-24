import { Divider, Stack, styled, Typography } from "@mui/material";

const DividerContainer = styled(Stack)({
  flexDirection: "row",
  alignItems: "center",
  gap: 16,
});

const DividerLine = styled(Divider)({
  flex: 1,
});

const CustomDivider = () => {
  return (
    <DividerContainer>
      <DividerLine />

      <Typography variant="body2" color="text.secondary">
        Or
      </Typography>

      <DividerLine />
    </DividerContainer>
  );
};

export default CustomDivider;