import {
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import type { ReactNode } from "react";

interface SidebarLinkProps {
  label: string;
  icon: ReactNode;
  active?: boolean;
}

const SidebarLink = ({
  label,
  icon,
  active = false,
}: SidebarLinkProps) => {
  return (
    <ListItemButton
      selected={active}
      sx={{
        borderRadius: 2,
        mb: 0.5,
        px: 2,
        py: 1.2,

        "&.Mui-selected": {
          bgcolor: "#EEF4FF",
          color: "#2563EB",
        },

        "&.Mui-selected:hover": {
          bgcolor: "#E4EEFF",
        },

        "&:hover": {
          bgcolor: "#F8FAFC",
        },
      }}
    >
      <ListItemIcon
        sx={{
          minWidth: 36,
          color: active ? "#2563EB" : "#64748B",
        }}
      >
        {icon}
      </ListItemIcon>

      <ListItemText
        primary={
          <Typography
            sx={{
              fontFamily: "Inter",
              fontSize: "14px",
              fontWeight: active ? 600 : 500,
            }}
          >
            {label}
          </Typography>
        }
      />
    </ListItemButton>
  );
};

export default SidebarLink;