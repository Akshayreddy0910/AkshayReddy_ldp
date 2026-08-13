import { useEffect, useState } from "react";
import { http, type Person } from "../lib/http";

export default function ListManager() {
  const [people, setPeople] = useState<Person[]>([]);
  const [removing, setRemoving] = useState<number | null>(null);

  useEffect(() => {
    http.get<Person[]>("/users?_limit=5").then((res) => setPeople(res.data));
  }, []);

  const remove = async (id: number) => {
    setRemoving(id);
    await http.delete(`/users/${id}`);
    setPeople((list) => list.filter((p) => p.id !== id));
    setRemoving(null);
  };

  return (
    <div>
      <h2>List Manager</h2>
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
