import { useRef } from "react";

const UseRef = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFocus = () => {
    inputRef.current?.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Enter your name" />

      <button onClick={handleFocus}>Focus Input</button>
    </div>
  );
};

export default UseRef;
