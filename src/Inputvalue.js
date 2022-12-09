import React, { useState } from "react";

const InputValue = () => {
  const [inputValue, setInputValue] = useState("");

  const inputHandler = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <h1> {inputValue}</h1>
      <input type="text" onChange={inputHandler} />
    </div>
  );
};

export default Inputvalue;
