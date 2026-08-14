import { useState } from "react";

const StateComponent = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>3. State Component</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  );
};

export default StateComponent;