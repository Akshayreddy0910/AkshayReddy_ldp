import { useState } from "react";
import { http, type Person } from "../lib/http";

export default function QueryParams() {
  const [city, setCity] = useState("Pune");
  const [results, setResults] = useState<Person[]>([]);

  const search = async () => {
    const res = await http.get<Person[]>("/users", { params: { city } });
    setResults(res.data);
  };

  return (
    <div>
      <h2>Query Params</h2>
      <input value={city} onChange={(e) => setCity(e.target.value)} placeholder="city" />
      <button className="go" onClick={search}>Search</button>
      {results.map((p) => (
        <div className="card" key={p.id}>{p.name} — {p.city}</div>
      ))}
    </div>
  );
}
