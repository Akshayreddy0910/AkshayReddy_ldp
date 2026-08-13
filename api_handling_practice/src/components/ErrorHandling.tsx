import { useState } from "react";

export default function ErrorHandling() {
  const [status, setStatus] = useState("");

  async function run() {
    setStatus("loading...");
    try {
      const res = await fetch("http://localhost:3001/users/99999");
      if (!res.ok) throw new Error(`status ${res.status}`);
      const data = await res.json();
      setStatus("ok: " + JSON.stringify(data));
    } catch (e) {
      setStatus("error: " + (e as Error).message);
    }
  }

  return (
    <div>
      <h2>Error Handling</h2>
      <button className="go" onClick={run}>Fetch missing user</button>
      {status && <p>{status}</p>}
    </div>
  );
}
