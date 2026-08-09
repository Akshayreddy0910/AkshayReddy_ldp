const KeyboardEvent = () => {
  const handleKeyDown = () => {
    console.log("Key Pressed");
  };

  const handleKeyUp = () => {
    console.log("Key Released");
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Type here"
        onKeyDown={handleKeyDown}
        onKeyUp={handleKeyUp}
      />
    </div>
  );
};

export default KeyboardEvent;
