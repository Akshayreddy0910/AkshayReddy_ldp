import { useState } from "react";
import Input from "../../atoms/Input";
import Button from "../../atoms/Button";

const SearchForm = () => {
  const [query, setQuery] = useState("");

  const handleSubmit = () => {
    console.log("Searching for:", query);
  };

  return (
    <div>
      <Input
        placeholder="Enter your name"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <Button label="Submit" onClick={handleSubmit} />
    </div>
  );
};

export default SearchForm;