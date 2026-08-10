{
/*import { useEffect } from "react";

const UseEffect = () => {
  useEffect(() => {
    console.log("Component Loaded");
  }, []);

  return (
    <div>
      <h2>useEffect Example</h2>
      <p>Check the browser console.</p>
    </div>
  );
};

export default UseEffect;*/
}

import { useEffect, useState } from "react";

const UseEffect = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Count changed:", count);
  }, [count]);

  return (
    <div>
      <h2>Count: {count}</h2>

      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default UseEffect;
