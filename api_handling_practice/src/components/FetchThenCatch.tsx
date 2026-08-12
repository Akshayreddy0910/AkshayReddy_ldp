import { useState } from "react";
import type { Person } from "../utils/api";

export default function FetchThenCatch() {
  const [person, setPerson] = useState<Person | null>(null);
  const [failed, setFailed] = useState(false);

  const run = () => {
    setFailed(false);
    fetch("http://localhost:3001/users/2")
      .then((r) => r.json())
      .then(setPerson)
      .catch(() => setFailed(true));
  };

  return (
    <div>
      <h2>Then / Catch</h2>
      <button className="go" onClick={run}>Fetch a user</button>
      {failed && <p className="err">Request failed.</p>}
      {person && (
        <div className="card">
          <b>{person.name}</b>
          <p>{person.email}</p>
        </div>
      )}
    </div>
  );
}
