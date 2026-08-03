import { useState } from "react";
import Button from "./components/atoms/Button";
import Input from "./components/atoms/Input";
import SearchForm from "./components/molecules/SearchForm";
import Basic from "./componentspractice/Basic";
import WithProp from "./componentspractice/withprop";
import StateComponent from "./componentspractice/usestate";
import Buttons from "./material_ui/Buttons";
import CheckBoxes from "./material_ui/Checkboxs";
import Radios from "./material_ui/Radio";
import Switch from "./material_ui/Switch";
import Avatars from "./material_ui/Avatar";
import Badges from "./material_ui/Badge";
import Chips from "./material_ui/Chip";
import Dividers from "./material_ui/Divider";
import Lists from "./material_ui/List";
import Tables from "./material_ui/Table";
import Tooltips from "./material_ui/Tooltip";
import Icons from "./material_ui/Icons";

function App() {
  const [name, setName] = useState("");

  const handleSubmit = () => {
    console.log("Submitted name:", name);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Atomic Design</h1>

      <h2>Atoms</h2>

      <Input
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <br />
      <br />

      <Button label="Submit" onClick={handleSubmit} />

      <hr />

      <h2>Molecules</h2>

      <SearchForm />

      <hr />

      <h2>Functional Component Practice</h2>

      <Basic />

      <hr />

      <WithProp name="Akshay" age={20} />

      <hr />

      <StateComponent />

      <hr />

      <h2>Material UI - Inputs</h2>

      <Buttons />

      <br />

      <CheckBoxes />

      <br />

      <Radios />

      <br />

      <Switch />

      <hr />

      <h2>Material UI - Data Display</h2>

      <h3>Avatar</h3>
      <Avatars />

      <br />

      <h3>Badge</h3>
      <Badges />

      <br />

      <h3>Chip</h3>
      <Chips />

      <br />

      <h3>Divider</h3>
      <Dividers />

      <br />

      <h3>List</h3>
      <Lists />

      <br />

      <h3>Table</h3>
      <Tables />

      <br />

      <h3>Tooltip</h3>
      <Tooltips />

      <br />

      <h3>Icons</h3>
      <Icons />
    </div>
  );
}

export default App;
