import { useEffect, useState } from "react";
import type { Person } from "../utils/api";

export default function PostManager() {
  const [people, setPeople] = useState<Person[]>([]);
  const [removing, setRemoving] = useState<number | null>(null);

  useEffect(() => {
    fetch("http://localhost:3001/users?_limit=5")
      .then((r) => r.json())
      .then(setPeople);
  }, []);

  async function remove(id: number) {
    setRemoving(id);
    await fetch(`http://localhost:3001/users/${id}`, { method: "DELETE" });
    setPeople((list) => list.filter((p) => p.id !== id));
    setRemoving(null);
  }

  return (
    <div>
      <h2>Post Manager</h2>
      {people.map((p) => (
        <div className="card" key={p.id}>
          {p.name}{" "}
          <button className="go" onClick={() => remove(p.id)} disabled={removing === p.id}>
            {removing === p.id ? "..." : "Remove"}
          </button>
        </div>
      ))}
      {people.length === 0 && <p>Nothing left.</p>}
    </div>
  );
}
