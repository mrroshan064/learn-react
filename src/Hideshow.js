import React, { useState } from "react";

const Hideshow = () => {
  const [showText, setShowText] = useState(true);
  const onToggle = () => {
    setShowText(!showText);
  };

  return (
    <div>
      <button onClick={onToggle}>show/hide</button>

      {showText && <h1>This is my boy and girl</h1>}
    </div>
  );
};

export default Hideshow;


import React, { useState } from "react";

const App = () => {
  const [text, setText] = useState(true);
  const onToggle = () => {
    const toggleText = () => {
      if (text === true) {
        return false;
      } else {
        return true;
      }
    }
    setText(toggleText)
  };

  return (
    <div>
      <button onClick={onToggle}>show/hide</button>
      {text && <h1>hello! Sangeeta How are you?</h1>}
    </div>
  );
};

export default App;

