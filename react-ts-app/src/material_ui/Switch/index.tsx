import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
const Switches = () => {
  return (
    <div>
      <Switch />
      <Switch defaultChecked color="success" />
      <Switch disabled />
      <FormControlLabel control={<Switch />} label="Dark Mode" />
      <FormGroup>
        <FormControlLabel
          control={<Switch />}
          label="Light Mode"
          labelPlacement="bottom"
        />
        <FormControlLabel
          control={<Switch name="Killer" />}
          label="Killer"
          labelPlacement="top"
        />
      </FormGroup>
    </div>
  );
};
export default Switches;
