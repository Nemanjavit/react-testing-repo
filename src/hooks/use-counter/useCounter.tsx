import { useState } from "react";
import { UseCounterTypes } from "./useCounter.types";

const UseCounter = ({ initialCount = 0 }: UseCounterTypes = {}) => {
  const [count, setCount] = useState(initialCount);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  return {
    count,
    decrement,
    increment,
  };
};

export default UseCounter;
