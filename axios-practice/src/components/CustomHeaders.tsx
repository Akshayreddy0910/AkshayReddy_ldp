import { useState } from "react";
import { http, type Person } from "../lib/http";

export default function CustomHeaders() {
  const [person, setPerson] = useState<Person | null>(null);

  const load = async () => {
    const res = await http.get<Person>("/users/5", {
      headers: { "X-Request-Source": "practice-app" },
    });
    setPerson(res.data);
  };

  return (
    <div>
      <h2>Custom Headers</h2>
      <button className="go" onClick={load}>Fetch with a custom header</button>
      {person && <div className="card"><b>{person.name}</b></div>}
    </div>
  );
}
