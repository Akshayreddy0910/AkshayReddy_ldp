import { useState } from "react";

export default function RemovePost() {
  const [msg, setMsg] = useState("");

  async function remove() {
    setMsg("deleting...");
    const res = await fetch("http://localhost:3001/users/10", { method: "DELETE" });
    setMsg(res.ok ? "user removed" : "delete failed");
  }

  return (
    <div>
      <h2>Remove Post</h2>
      <button className="go" onClick={remove}>Delete user #10</button>
      {msg && <p>{msg}</p>}
    </div>
  );
}
