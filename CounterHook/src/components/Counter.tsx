import { useCounter } from "../hooks/useCounter";
const Counter = () => {
  const {
    count,
    increment,
    decrement,
    reset,
    max,
    min,
    isEven,
    stepIncrement,
    stepDecrement,
  } = useCounter(10);
  return (
    <div>
      <h1>Counter</h1>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={stepIncrement}>Step Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={stepDecrement}>Step Decrement</button>
      <button onClick={reset}>Reset</button>
      <button onClick={max}>Max</button>
      <button onClick={min}>Min</button>
      <p>{isEven()}</p>
    </div>
  );
};

export default Counter;
