import type { SxProps, Theme } from "@mui/material/styles";

export const getSearchInputSx = (
  width: number | string,
  sx?: SxProps<Theme>
): SxProps<Theme> => [{ width }, ...(Array.isArray(sx) ? sx : sx ? [sx] : [])];
