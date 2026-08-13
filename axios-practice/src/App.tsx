import { useState } from "react";
import "./App.css";

import BasicGet from "./components/BasicGet";
import PostData from "./components/PostData";
import UpdateData from "./components/UpdateData";
import DeleteData from "./components/DeleteData";
import AxiosInstance from "./components/AxiosInstance";
import ErrorHandling from "./components/ErrorHandling";
import QueryParams from "./components/QueryParams";
import CustomHeaders from "./components/CustomHeaders";
import CancelRequest from "./components/CancelRequest";
import ListManager from "./components/ListManager";

const screens = [
  ["Basic Get", BasicGet],
  ["Post Data", PostData],
  ["Update Data", UpdateData],
  ["Delete Data", DeleteData],
  ["Axios Instance", AxiosInstance],
  ["Error Handling", ErrorHandling],
  ["Query Params", QueryParams],
  ["Custom Headers", CustomHeaders],
  ["Cancel Request", CancelRequest],
  ["List Manager", ListManager],
] as const;

export default function App() {
  const [index, setIndex] = useState(0);
  const Screen = screens[index][1];

  return (
    <div className="app">
      <h1>Axios Practice</h1>

      <select
        className="picker"
        value={index}
        onChange={(e) => setIndex(Number(e.target.value))}
      >
        {screens.map(([label], i) => (
          <option key={label} value={i}>
            {label}
          </option>
        ))}
      </select>

      <div className="content">
        <Screen />
      </div>
    </div>
  );
}
