import React, { useCallback, useState } from "react";

const MessageButton = React.memo(({ onClick }: { onClick: () => void }) => {
  return <button onClick={onClick}>Show Message</button>;
});

const UseCallback = () => {
  const [count, setCount] = useState(0);

  const showMessage = useCallback(() => {
    alert("Hello React!");
  }, []);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <MessageButton onClick={showMessage} />
    </div>
  );
};

export default UseCallback;
