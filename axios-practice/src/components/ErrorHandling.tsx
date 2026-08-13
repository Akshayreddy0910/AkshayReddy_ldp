import { useState } from "react";
import axios from "axios";
import { http } from "../lib/http";

export default function ErrorHandling() {
  const [status, setStatus] = useState("");

  const load = async () => {
    setStatus("loading...");
    try {
      await http.get("/users/99999");
    } catch (err) {
      if (axios.isAxiosError(err)) {
        setStatus(`Axios error: ${err.response?.status ?? "no response"}`);
      } else {
        setStatus("Unknown error");
      }
    }
  };

  return (
    <div>
      <h2>Error Handling</h2>
      <button className="go" onClick={load}>Fetch missing user</button>
      {status && <p>{status}</p>}
    </div>
  );
}
