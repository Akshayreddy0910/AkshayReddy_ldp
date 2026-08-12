import { useState } from "react";
import type { Person } from "../utils/api";

export default function AsyncAwaitDemo() {
  const [person, setPerson] = useState<Person | null>(null);

  async function run() {
    const res = await fetch("http://localhost:3001/users/1");
    const data = await res.json();
    setPerson(data);
  }

  return (
    <div>
      <h2>Async / Await</h2>
      <button className="go" onClick={run}>Fetch a user</button>
      {person && (
        <div className="card">
          <b>{person.name}</b>
          <p>{person.email}</p>
          <p>{person.address.city}</p>
        </div>
      )}
    </div>
  );
}
