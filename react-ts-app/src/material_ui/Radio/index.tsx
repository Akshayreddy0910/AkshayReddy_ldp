import Radio from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";
import RadioGroup from "@mui/material/RadioGroup";
const Radios = () => {
  return (
    <div>
      <Radio />
      <Radio defaultChecked />
      <Radio disabled />
      <FormControlLabel control={<Radio />} label="check" />
      <RadioGroup row>
        <FormControlLabel control={<Radio />} label="Male" />
        <FormControlLabel control={<Radio />} label="Female" />
        <FormControlLabel control={<Radio />} label="Others" />
      </RadioGroup>
    </div>
  );
};
export default Radios;
