import { useState } from "react";
import axios from "axios";
import { http } from "../lib/http";

export default function CancelRequest() {
  const [status, setStatus] = useState("");
  const [controller, setController] = useState<AbortController | null>(null);

  const start = async () => {
    const ctrl = new AbortController();
    setController(ctrl);
    setStatus("loading...");
    try {
      const res = await http.get("/users/6", { signal: ctrl.signal });
      setStatus(`loaded: ${res.data.name}`);
    } catch (err) {
      if (axios.isCancel(err)) {
        setStatus("request cancelled");
      } else {
        setStatus("request failed");
      }
    }
  };

  const cancel = () => {
    controller?.abort();
  };

  return (
    <div>
      <h2>Cancel Request</h2>
      <button className="go" onClick={start}>Start Request</button>{" "}
      <button className="go" onClick={cancel}>Cancel</button>
      {status && <p>{status}</p>}
    </div>
  );
}
