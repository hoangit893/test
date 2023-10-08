import React, { useState } from "react";

function InputBar({ addToDo }) {
  const [value, setValue] = useState("");

  const handleChange = ({ target }) => {
    setValue(target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addToDo(value);
    setValue("");
  };

  return (
    <form
      style={{
        display: "flex",
        justifyContent: "center",
        position: "relative",
        width: "40vw",
      }}
      action="">
      <input
        style={{
          width: "30vw",
          height: "50px",
          borderRadius: "10px",
          border: "1px solid #C7C7C7",
          marginRight: "10px",
        }}
        type="text"
        placeholder="add details"
        value={value}
        onChange={handleChange}
      />
      <button
        style={{
          height: "56px",
          width: "56px",
          borderRadius: "10px",
          border: "transparent",
          color: "white",
          fontWeight: "bold",
          backgroundColor: "#11999E",
        }}
        onClick={handleSubmit}>
        Add
      </button>
    </form>
  );
}

export default InputBar;
