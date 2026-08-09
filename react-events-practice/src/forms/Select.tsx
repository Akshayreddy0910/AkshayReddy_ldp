import { useState } from "react";

const Select = () => {
  const [city, setCity] = useState("");

  return (
    <div>
      <select value={city} onChange={(e) => setCity(e.target.value)}>
        <option value="">Select City</option>
        <option value="Hyderabad">Hyderabad</option>
        <option value="Bangalore">Bangalore</option>
        <option value="Chennai">Chennai</option>
      </select>

      <p>Selected City: {city}</p>
    </div>
  );
};

export default Select;
