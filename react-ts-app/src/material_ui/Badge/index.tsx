import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";
import Stack from "@mui/material/Stack";

const Badges = () => {
  return (
    <Stack direction="row" spacing={4}>
      <Badge badgeContent={5} color="primary">
        <MailIcon />
      </Badge>

      <Badge badgeContent={99} color="error">
        <MailIcon />
      </Badge>
    </Stack>
  );
};

export default Badges;
