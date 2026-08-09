import type { SxProps, Theme } from "@mui/material/styles";

export const styles: Record<string, SxProps<Theme>> = {
  paper: {
    borderRadius: 3,
    overflow: "hidden",
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    p: 3,
  },

  headerActions: {
    display: "flex",
    gap: 2,
    alignItems: "center",
  },

  footer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    px: 3,
    py: 2,
  },

  footerLeft: {
    display: "flex",
    alignItems: "center",
    gap: 2,
  },

  footerRight: {
    display: "flex",
    alignItems: "center",
    gap: 1,
  },

  pageButton: {
    minWidth: 36,
    px: 0,
  },
};
