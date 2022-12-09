import React, { useState } from "react";

const Text = () => {
  const [inputValue, setInputValue] = useState("");
  return (
    <div>
      <input
        type="text"
        onChange={(event) => setInputValue(event.target.value)}
      />

      <h1>{inputValue}</h1>
    </div>
  );
};

export default Text;
