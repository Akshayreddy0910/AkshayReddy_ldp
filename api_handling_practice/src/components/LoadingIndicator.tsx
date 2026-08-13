import { useState } from "react";
import type { Person } from "../utils/api";

export default function LoadingIndicator() {
  const [person, setPerson] = useState<Person | null>(null);
  const [busy, setBusy] = useState(false);

  async function run() {
    setBusy(true);
    setPerson(null);
    try {
      const res = await fetch("http://localhost:3001/users/4");
      setPerson(await res.json());
    } finally {
      setBusy(false);
    }
  }

  return (
    <div>
      <h2>Loading Indicator</h2>
      <button className="go" onClick={run} disabled={busy}>
        {busy ? "Loading..." : "Fetch a user"}
      </button>
      {person && !busy && (
        <div className="card">
          <b>{person.name}</b>
          <p>{person.email}</p>
        </div>
      )}
    </div>
  );
}
