import { useState } from "react";
import type { Person } from "../utils/api";

export default function EditPost() {
  const [name, setName] = useState("");
  const [result, setResult] = useState<Person | null>(null);

  async function save() {
    const res = await fetch("http://localhost:3001/users/1", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name }),
    });
    setResult(await res.json());
  }

  return (
    <div>
      <h2>Edit Post</h2>
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="new name" />
      <button className="go" onClick={save} disabled={!name}>Save</button>
      {result && <div className="card">User {result.id} is now: {result.name}</div>}
    </div>
  );
}
