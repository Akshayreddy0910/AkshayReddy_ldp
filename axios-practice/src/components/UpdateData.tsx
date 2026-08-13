import { useState } from "react";
import { http, type Person } from "../lib/http";

export default function UpdateData() {
  const [name, setName] = useState("");
  const [result, setResult] = useState<Person | null>(null);

  const save = async () => {
    const res = await http.patch<Person>("/users/1", { name });
    setResult(res.data);
  };

  return (
    <div>
      <h2>Update Data</h2>
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="new name" />
      <button className="go" onClick={save} disabled={!name}>Save</button>
      {result && <div className="card">User {result.id} is now: {result.name}</div>}
    </div>
  );
}
