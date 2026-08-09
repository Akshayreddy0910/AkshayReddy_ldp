import { useState } from "react";

const Checkbox = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={() => setIsChecked(!isChecked)}
      />

      <p>{isChecked ? "Accepted" : "Not Accepted"}</p>
    </div>
  );
};

export default Checkbox;
