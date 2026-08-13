import { useState } from "react";
import axios from "axios";
import type { Person } from "../lib/http";

const reportsApi = axios.create({
  baseURL: "http://localhost:3001",
  timeout: 3000,
  headers: { "X-Client": "axios-practice" },
});

export default function AxiosInstance() {
  const [person, setPerson] = useState<Person | null>(null);

  const load = async () => {
    const res = await reportsApi.get<Person>("/users/2");
    setPerson(res.data);
  };

  return (
    <div>
      <h2>Axios Instance</h2>
      <p>Uses a separate axios.create() instance with its own timeout and header.</p>
      <button className="go" onClick={load}>Fetch with custom instance</button>
      {person && <div className="card"><b>{person.name}</b></div>}
    </div>
  );
}
