import { Box } from "@mui/material";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";

import Typography from "../../atoms/Typography";
import Button from "../../atoms/Button";
import { TOPBAR_TEXT } from "../../../utils/constants";

const TopBar = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        mb: 3,
      }}
    >
      <Typography text={TOPBAR_TEXT.title} variant="heading" />

      <Box
        sx={{
          display: "flex",
          gap: 2,
        }}
      >
        <Button
          label={TOPBAR_TEXT.exportLabel}
          variant="outline"
          icon={<DownloadOutlinedIcon />}
        />

        <Button
          label={TOPBAR_TEXT.manualOrderLabel}
          variant="primary"
          icon={<AddOutlinedIcon />}
        />
      </Box>
    </Box>
  );
};

export default TopBar;
