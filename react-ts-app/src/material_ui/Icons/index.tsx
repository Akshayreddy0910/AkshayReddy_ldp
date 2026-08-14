import HomeIcon from "@mui/icons-material/Home";
import DeleteIcon from "@mui/icons-material/Delete";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Stack from "@mui/material/Stack";

const Icons = () => {
  return (
    <Stack direction="row" spacing={3}>
      <HomeIcon />
      <DeleteIcon color="error" />
      <FavoriteIcon color="primary" />
    </Stack>
  );
};

export default Icons;
