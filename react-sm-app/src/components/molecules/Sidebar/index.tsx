import { Avatar, Box, Divider, Drawer, List } from "@mui/material";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import WarningAmberOutlinedIcon from "@mui/icons-material/WarningAmberOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import AnalyticsOutlinedIcon from "@mui/icons-material/AnalyticsOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FolderOpenOutlinedIcon from "@mui/icons-material/FolderOpenOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import type { ReactNode } from "react";

import Typography from "../../atoms/Typography";
import SidebarLink from "../SidebarLink";

import profile from "../../../assets/profile.jpg";
import { APP_NAME, CURRENT_USER, SIDEBAR_LINKS } from "../../../utils/constants";

import { styles } from "./styles";

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
  return (
    <Drawer variant="permanent" sx={styles.drawer}>
      <Box>
        <Typography text={APP_NAME} variant="subheading" />

        <List sx={styles.linkList}>
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
        <Divider sx={styles.divider} />

        <Box sx={styles.profileRow}>
          <Avatar src={profile} sx={styles.avatar} />

          <Box sx={styles.profileText}>
            <Typography text={CURRENT_USER.name} sx={styles.profileName} />
            <Typography text={CURRENT_USER.handle} variant="label" />
          </Box>

          <LogoutOutlinedIcon sx={styles.logoutIcon} />
        </Box>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
