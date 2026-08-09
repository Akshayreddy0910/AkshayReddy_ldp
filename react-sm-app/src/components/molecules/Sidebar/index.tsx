import { Avatar, Box, Divider, Drawer, List } from "@mui/material";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import WarningAmberOutlinedIcon from "@mui/icons-material/WarningAmberOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import AnalyticsOutlinedIcon from "@mui/icons-material/AnalyticsOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FolderOpenOutlinedIcon from "@mui/icons-material/FolderOpenOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import { useTheme } from "@mui/material/styles";
import type { ReactNode } from "react";

import Typography from "../../atoms/Typography";
import SidebarLink from "../../atoms/SidebarLink";

import profile from "../../../assets/profile.jpg";
import { APP_NAME, CURRENT_USER, SIDEBAR_LINKS } from "../../../utils/constants";

const drawerWidth = 240;

const ICONS_BY_KEY: Record<(typeof SIDEBAR_LINKS)[number]["key"], ReactNode> = {
  home: <HomeOutlinedIcon />,
  candidates: <GroupsOutlinedIcon />,
  adverseActions: <WarningAmberOutlinedIcon />,
  logs: <DescriptionOutlinedIcon />,
  analytics: <AnalyticsOutlinedIcon />,
  account: <PersonOutlineOutlinedIcon />,
  screenings: <FolderOpenOutlinedIcon />,
};

const ACTIVE_LINK_KEY = "candidates";

const Sidebar = () => {
  const theme = useTheme();

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,

        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          p: 2.5,
          display: "flex",
          justifyContent: "space-between",
        },
      }}
    >
      <Box>
        <Typography text={APP_NAME} variant="subheading" />

        <List
          sx={{
            mt: 4,
            display: "flex",
            flexDirection: "column",
            gap: 0.5,
          }}
        >
          {SIDEBAR_LINKS.map((link) => (
            <SidebarLink
              key={link.key}
              label={link.label}
              icon={ICONS_BY_KEY[link.key]}
              active={link.key === ACTIVE_LINK_KEY}
            />
          ))}
        </List>
      </Box>

      <Box>
        <Divider sx={{ mb: 2 }} />

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1.5,
          }}
        >
          <Avatar
            src={profile}
            sx={{
              width: 40,
              height: 40,
            }}
          />

          <Box sx={{ flexGrow: 1 }}>
            <Typography text={CURRENT_USER.name} sx={{ fontWeight: 600 }} />
            <Typography text={CURRENT_USER.handle} variant="label" />
          </Box>

          <LogoutOutlinedIcon
            sx={{
              color: theme.palette.text.secondary,
              cursor: "pointer",
            }}
          />
        </Box>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
