import {
  Avatar,
  Box,
  Divider,
  Drawer,
  List,
} from "@mui/material";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import WarningAmberOutlinedIcon from "@mui/icons-material/WarningAmberOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import AnalyticsOutlinedIcon from "@mui/icons-material/AnalyticsOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FolderOpenOutlinedIcon from "@mui/icons-material/FolderOpenOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";

import Typography from "../../atoms/Typography";
import SidebarLink from "../../atoms/SidebarLink";

import profile from "../../../assets/profile.jpg";

const drawerWidth = 240;

const Sidebar = () => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,

        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          borderRight: "1px solid #E5E7EB",
          p: 2.5,
          display: "flex",
          justifyContent: "space-between",
        },
      }}
    >
      <Box>
        <Typography
          text="RECRUIT"
          variant="subheading"
          bold
        />

        <List
          sx={{
            mt: 4,
            display: "flex",
            flexDirection: "column",
            gap: 0.5,
          }}
        >
          <SidebarLink
            label="Home"
            icon={<HomeOutlinedIcon />}
          />

          <SidebarLink
            label="Candidates"
            icon={<GroupsOutlinedIcon />}
            active
          />

          <SidebarLink
            label="Adverse Actions"
            icon={<WarningAmberOutlinedIcon />}
          />

          <SidebarLink
            label="Logs"
            icon={<DescriptionOutlinedIcon />}
          />

          <SidebarLink
            label="Analytics"
            icon={<AnalyticsOutlinedIcon />}
          />

          <SidebarLink
            label="Account"
            icon={<PersonOutlineOutlinedIcon />}
          />

          <SidebarLink
            label="Screenings"
            icon={<FolderOpenOutlinedIcon />}
          />
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
            <Typography
              text="James Rodriguez"
              bold
            />

            <Typography
              text="James.co"
              variant="label"
            />
          </Box>

          <LogoutOutlinedIcon
            sx={{
              color: "#64748B",
              cursor: "pointer",
            }}
          />
        </Box>
      </Box>
    </Drawer>
  );
};

export default Sidebar;