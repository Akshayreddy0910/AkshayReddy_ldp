import { useState } from "react";
import { requestJson, type Person } from "../utils/api";

function useSend<T>(path: string) {
  const [busy, setBusy] = useState(false);

  async function send(body: unknown): Promise<T | null> {
    setBusy(true);
    try {
      return await requestJson<T>(path, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    } catch {
      return null;
    } finally {
      setBusy(false);
    }
  }

  return { send, busy };
}

export default function CustomSubmitHook() {
  const [name, setName] = useState("");
  const [saved, setSaved] = useState<Person | null>(null);
  const { send, busy } = useSend<Person>("/users");

  async function submit() {
    const result = await send({ name, email: `${name.toLowerCase()}@example.com` });
    if (result) setSaved(result);
  }

  return (
    <div>
      <h2>Custom Submit Hook</h2>
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="name" />
      <button className="go" onClick={submit} disabled={!name || busy}>
        {busy ? "Saving..." : "Submit"}
      </button>
      {saved && <div className="card">Created id {saved.id}: {saved.name}</div>}
    </div>
  );
}
