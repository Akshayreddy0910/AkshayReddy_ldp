import UseEffect from "./hooks/UseEffect";
import UseRef from "./hooks/UseRef";
import UseMemo from "./hooks/UseMemo";
import UseCallback from "./hooks/UseCallback";
import UseContext from "./hooks/UseContext";

import ClickEvent from "./events/ClickEvent";
import MouseEvent from "./events/MouseEvent";
import KeyboardEvent from "./events/KeyboardEvent";
import FormEvent from "./events/FormEvent";

import TextInput from "./forms/TextInput";
import Checkbox from "./forms/Checkbox";
import RadioButton from "./forms/RadioButton";
import Select from "./forms/Select";
import LoginForm from "./forms/LoginForm";
import Validation from "./forms/Validation";

import BasicProps from "./props/BasicProps";
import ObjectProps from "./props/ObjectProps";
import PropsWithChildren from "./props/PropsWithChildren";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <UseEffect />
      <hr />

      <UseRef />
      <hr />

      <UseMemo />
      <hr />

      <UseCallback />
      <hr />

      <UseContext />
      <hr />

      <ClickEvent />
      <hr />

      <MouseEvent />
      <hr />

      <KeyboardEvent />
      <hr />

      <FormEvent />
      <hr />

      <TextInput />
      <hr />

      <Checkbox />
      <hr />

      <RadioButton />
      <hr />

      <Select />
      <hr />

      <LoginForm />
      <hr />

      <Validation />
      <hr />

      <BasicProps />
      <hr />

      <ObjectProps />
      <hr />

      <PropsWithChildren />
    </div>
  );
}

export default App;