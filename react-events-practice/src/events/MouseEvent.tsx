const MouseEvent = () => {
  const handleMouseEnter = () => {
    console.log("Mouse Entered");
  };

  const handleMouseLeave = () => {
    console.log("Mouse Left");
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ width: "200px", padding: "20px", border: "1px solid black" }}
    >
      Hover Over Me
    </div>
  );
};

export default MouseEvent;
