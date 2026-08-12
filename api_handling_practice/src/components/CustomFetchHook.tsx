import { useEffect, useState } from "react";
import { requestJson, type Person } from "../utils/api";

function useLoad<T>(path: string) {
  const [value, setValue] = useState<T | null>(null);
  const [busy, setBusy] = useState(true);

  useEffect(() => {
    setBusy(true);
    requestJson<T>(path)
      .then(setValue)
      .finally(() => setBusy(false));
  }, [path]);

  return { value, busy };
}

export default function CustomFetchHook() {
  const { value: person, busy } = useLoad<Person>("/users/5");

  return (
    <div>
      <h2>Custom Fetch Hook</h2>
      {busy && <p>Loading...</p>}
      {person && (
        <div className="card">
          <b>{person.name}</b>
          <p>{person.website}</p>
        </div>
      )}
    </div>
  );
}
