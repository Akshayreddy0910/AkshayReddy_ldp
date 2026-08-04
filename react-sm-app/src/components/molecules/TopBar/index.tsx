import { Box } from "@mui/material";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";

import Typography from "../../atoms/Typography";
import Button from "../../atoms/Button";

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
      <Typography
        text="Candidates"
        variant="heading"
        bold
      />

      <Box
        sx={{
          display: "flex",
          gap: 2,
        }}
      >
        <Button
          label="Export"
          variant="outline"
          icon={<DownloadOutlinedIcon />}
        />

        <Button
          label="Manual Order"
          variant="primary"
          icon={<AddOutlinedIcon />}
        />
      </Box>
    </Box>
  );
};

export default TopBar;