import { useState } from "react";
import { http, type Person } from "../lib/http";

export default function BasicGet() {
  const [person, setPerson] = useState<Person | null>(null);

  const load = async () => {
    const res = await http.get<Person>("/users/1");
    setPerson(res.data);
  };

  return (
    <div>
      <h2>Basic Get</h2>
      <button className="go" onClick={load}>Fetch a user</button>
      {person && (
        <div className="card">
          <b>{person.name}</b>
          <p>{person.email}</p>
        </div>
      )}
    </div>
  );
}
