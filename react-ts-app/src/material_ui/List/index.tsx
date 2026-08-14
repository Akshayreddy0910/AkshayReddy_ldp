import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

const Lists = () => {
  return (
    <List>
      <ListItem>
        <ListItemText primary="Home" />
      </ListItem>

      <ListItem>
        <ListItemText primary="About" />
      </ListItem>

      <ListItem>
        <ListItemText primary="Contact" />
      </ListItem>
    </List>
  );
};

export default Lists;
