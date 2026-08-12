import { useState } from "react";
import type { Person } from "../utils/api";

export default function SubmitNewPost() {
  const [name, setName] = useState("");
  const [saved, setSaved] = useState<Person | null>(null);

  async function submit() {
    const res = await fetch("http://localhost:3001/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email: `${name.toLowerCase()}@example.com` }),
    });
    setSaved(await res.json());
  }

  return (
    <div>
      <h2>Submit New Post</h2>
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="name" />
      <button className="go" onClick={submit} disabled={!name}>Submit</button>
      {saved && <div className="card">Created id {saved.id}: {saved.name}</div>}
    </div>
  );
}
