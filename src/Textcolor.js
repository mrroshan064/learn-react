import React, { useState } from "react";

const Textcolor = () => {
  const [textColor, setTextColor] = useState("black");

  return (
    <div>
      <h1 style={{ color: textColor }}> I am not getting any more</h1>
      <button
        onClick={() => setTextColor(textColor === "black" ? "red" : "black")}
      >
        Click Me
      </button>
    </div>
  );
};

export default Textcolor;
