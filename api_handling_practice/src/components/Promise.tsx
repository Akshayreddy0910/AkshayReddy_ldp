import { useState } from "react";

export default function PromiseIntro() {
  const [output, setOutput] = useState("");

  const check = () => {
    const p = fetch("http://localhost:3001/users/1");
    setOutput(String(p));
  };

  return (
    <div>
      <h2>Promise Intro</h2>
      <button className="go" onClick={check}>Call fetch()</button>
      {output && <p>{output}</p>}
    </div>
  );
}
