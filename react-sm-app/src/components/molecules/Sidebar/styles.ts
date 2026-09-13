import type { SxProps, Theme } from "@mui/material/styles";

const DRAWER_WIDTH = 240;

export const drawerWidth = DRAWER_WIDTH;

export const styles: Record<string, SxProps<Theme>> = {
  drawer: {
    width: DRAWER_WIDTH,
    flexShrink: 0,

    "& .MuiDrawer-paper": {
      width: DRAWER_WIDTH,
      boxSizing: "border-box",
      p: 2.5,
      display: "flex",
      justifyContent: "space-between",
    },
  },

  linkList: {
    mt: 4,
    display: "flex",
    flexDirection: "column",
    gap: 0.5,
  },

  divider: {
    mb: 2,
  },

  profileRow: {
    display: "flex",
    alignItems: "center",
    gap: 1.5,
  },

  avatar: {
    width: 40,
    height: 40,
  },

  profileText: {
    flexGrow: 1,
  },

  profileName: {
    fontWeight: 600,
  },

  logoutIcon: (theme: Theme) => ({
    color: theme.palette.text.secondary,
    cursor: "pointer",
  }),
};
