import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

const Avatars = () => {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar>A</Avatar>
      <Avatar sx={{ bgcolor: "green" }}>B</Avatar>
      <Avatar src="https://i.pravatar.cc/150?img=5" />
    </Stack>
  );
};

export default Avatars;
