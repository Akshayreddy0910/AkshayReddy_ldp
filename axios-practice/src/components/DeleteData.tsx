import { useState } from "react";
import { http } from "../lib/http";

export default function DeleteData() {
  const [msg, setMsg] = useState("");

  const remove = async () => {
    setMsg("deleting...");
    await http.delete("/users/8");
    setMsg("user removed");
  };

  return (
    <div>
      <h2>Delete Data</h2>
      <button className="go" onClick={remove}>Delete user #8</button>
      {msg && <p>{msg}</p>}
    </div>
  );
}
