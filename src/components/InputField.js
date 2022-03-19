import React from "react";
import { useGlobalContext } from "../context";

function InputField() {
  const { handleSubmit, task, handleValue } = useGlobalContext();
  return (
    <form className="input-form" onSubmit={handleSubmit}>
      <input type="checkbox" className="checkbox" disabled />
      <input
        type="text"
        value={task}
        onChange={handleValue}
        className="task-input"
        placeholder="Create a new todo..."
      />
    </form>
  );
}

export default InputField;
