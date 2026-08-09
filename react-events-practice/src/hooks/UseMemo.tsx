import { useMemo, useState } from "react";

const UseMemo = () => {
  const [count, setCount] = useState(0);

  const square = useMemo(() => count * count, [count]);

  return (
    <div>
      <h2>Count: {count}</h2>
      <h2>Square: {square}</h2>

      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default UseMemo;
