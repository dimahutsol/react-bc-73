import { useState } from "react";

export const TodosForm = ({ onSubmit }) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(value);

    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={value} onChange={handleChange} type="text" />
      <button type="submit"> Add to do</button>
    </form>
  );
};
