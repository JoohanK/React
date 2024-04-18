import { useState } from "react";

export const useCounter = (initialValue: number) => {
  const [count, setCount] = useState(initialValue);

  return {
    count,
    increment: () =>
      setCount((count) => (count < initialValue + 10 ? count + 1 : count)),
    decrement: () =>
      setCount((count) => (count > initialValue - 10 ? count - 1 : count)),
    stepIncrement: () =>
      setCount((count) => (count < initialValue + 9 ? count + 2 : count)),
    stepDecrement: () =>
      setCount((count) => (count > initialValue - 9 ? count - 2 : count)),
    reset: () => setCount(initialValue),
    max: () => setCount(initialValue + 10),
    min: () => setCount(initialValue - 10),
    isEven: () => (count % 2 === 0 ? "Even" : "Odd"),
  };
};
