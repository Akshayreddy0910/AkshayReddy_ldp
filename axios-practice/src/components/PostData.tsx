import { useState } from "react";
import { http, type Person } from "../lib/http";

export default function PostData() {
  const [name, setName] = useState("");
  const [saved, setSaved] = useState<Person | null>(null);

  const submit = async () => {
    const res = await http.post<Person>("/users", {
      name,
      email: `${name.toLowerCase()}@example.com`,
    });
    setSaved(res.data);
  };

  return (
    <div>
      <h2>Post Data</h2>
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="name" />
      <button className="go" onClick={submit} disabled={!name}>Submit</button>
      {saved && <div className="card">Created id {saved.id}: {saved.name}</div>}
    </div>
  );
}
