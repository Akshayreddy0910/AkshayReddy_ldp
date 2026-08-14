import { Box } from "@mui/material";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";

import Typography from "../../atoms/Typography";
import Button from "../../atoms/Button";
import { TOPBAR_TEXT } from "../../../utils/constants";

const styles = {
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    mb: 3,
  },

  buttonGroup: {
    display: "flex",
    gap: 2,
  },
};

const TopBar = () => {
  return (
    <Box sx={styles.container}>
      <Typography text={TOPBAR_TEXT.title} variant="heading" />

      <Box sx={styles.buttonGroup}>
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