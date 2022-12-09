import React, { useState, useEffect } from "react";

const App = () => {
  const [text, setText] = useState(true);
  const [color, setColor] = useState(true);

  useEffect(() => {
    console.log("component mounted")
    return () => {
      console.log("component Unmounted")
    }
  })
  return (
    <div>
      <button onClick={() => setText(text ? false : true)}>
        show/hide
      </button>
      <button onClick={() => setColor(color ? false : true)}>change color</button>
      {text && <h1 style={{ color: color ? "red" : "green" }}>hello! Sangeeta How are you?</h1>}
    </div>
  );
};

export default App;

