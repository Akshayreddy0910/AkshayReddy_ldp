import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import type { ReactNode } from "react";

import Typography from "../../atoms/Typography";

interface SidebarLinkProps {
  label: string;
  icon: ReactNode;
  active?: boolean;
}

const SidebarLink = ({ label, icon, active = false }: SidebarLinkProps) => {
  return (
    <ListItemButton selected={active}>
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText primary={<Typography text={label} />} />
    </ListItemButton>
  );
};

export default SidebarLink;
