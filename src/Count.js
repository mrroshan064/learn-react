import { useState } from "react";

const Count = () => {
  const [initialAge, setInitialAge] = useState(0);
  const increaseValue = () => {
    setInitialAge(initialAge + 1);
  };
  const decreaseValue = () => {
    setInitialAge(initialAge - 1);
  };
  const setToZero = () => {
    setInitialAge(0);
  };
  return (
    <div>
      {initialAge}
      <button onClick={increaseValue}>Increase</button>
      <button onClick={decreaseValue}>Deacrease</button>
      <button onClick={setToZero}>zero</button>
    </div>
  );
};

export default Coun;
