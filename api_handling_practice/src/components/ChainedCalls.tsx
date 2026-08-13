import { useState } from "react";
import type { Person } from "../utils/api";

type Post = { id: number; title: string };

export default function ChainedCalls() {
  const [person, setPerson] = useState<Person | null>(null);
  const [posts, setPosts] = useState<Post[]>([]);

  const run = () => {
    setPerson(null);
    setPosts([]);
    fetch("http://localhost:3001/users/3")
      .then((r) => r.json())
      .then((data: Person) => {
        setPerson(data);
        return fetch(`http://localhost:3001/posts?userId=${data.id}`);
      })
      .then((r) => r.json())
      .then(setPosts);
  };

  return (
    <div>
      <h2>Chained Calls</h2>
      <button className="go" onClick={run}>Load user + their posts</button>
      {person && <div className="card"><b>{person.name}</b></div>}
      {posts.map((p) => (
        <div className="card" key={p.id}>{p.title}</div>
      ))}
    </div>
  );
}
