import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import SaveIcon from "@mui/icons-material/Save";
import { ButtonGroup, IconButton } from "@mui/material";
import { AddShoppingCart, Favorite } from "@mui/icons-material";
import Badge from "@mui/material/Badge";
import Stack from "@mui/material/Stack";

const Buttons = () => {
  return (
    <div>
      <Button variant="contained"> Hello MUI</Button>
      <br />
      <Button variant="text">Default</Button>
      <br />
      <Button variant="contained" disabled>
        Contained&Disabled
      </Button>
      <br />
      <Button variant="outlined" href="www.google.com">
        Link
      </Button>
      <br />
      <Button variant="contained" color="success">
        Success
      </Button>
      <br />
      <Button variant="outlined" color="error">
        Error
      </Button>
      <br />
      <Button variant="contained" size="small">
        Small
      </Button>
      <br />

      <Button variant="outlined" startIcon={<DeleteIcon />}>
        Delete
      </Button>
      <br />
      <Button variant="contained" endIcon={<SaveIcon />}>
        Save
      </Button>
      <br />
      <IconButton aria-label="add to cart" size="medium">
        <AddShoppingCart />
      </IconButton>
      <IconButton aria-label="Favourite">
        <Badge badgeContent={2} color="error" overlap="circular">
          <Favorite />
        </Badge>
      </IconButton>
      <Stack spacing={2}>
        <Button variant="outlined">Submit</Button>

        <Button loading={true} variant="outlined">
          Loading Submit
        </Button>
      </Stack>
      <ButtonGroup variant="outlined">
        <Button>Button1</Button>
        <Button>Button2</Button>
        <Button>Button3</Button>
      </ButtonGroup>
    </div>
  );
};

export default Buttons;
