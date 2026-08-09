import { useState } from "react";

const RadioButton = () => {
  const [gender, setGender] = useState("");

  return (
    <div>
      <label>
        <input
          type="radio"
          value="Male"
          checked={gender === "Male"}
          onChange={(e) => setGender(e.target.value)}
        />
        Male
      </label>

      <label>
        <input
          type="radio"
          value="Female"
          checked={gender === "Female"}
          onChange={(e) => setGender(e.target.value)}
        />
        Female
      </label>

      <p>Selected: {gender}</p>
    </div>
  );
};

export default RadioButton;
