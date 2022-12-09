import React, { useState, useEffect } from "react";
import Text from "./Text";

const LifeCycle = () => {
  const [showText, setShowTextBox] = useState(false);

  useEffect(() => {
    console.log("compount mounted");
    return () => {
      console.log("compount unmounted");
    };
  }, []);

  return (
    <div>
      <button onClick={() => setShowTextBox(!showText)}>
        Hide/Show TextBox
      </button>

      {showText && <Text />}
    </div>
  );
};

export default LifeCycle;
