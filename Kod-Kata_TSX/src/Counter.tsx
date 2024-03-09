import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleAddClick = () => setCount(count + 1);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setCount(Number(e.target.value));
  };

  return (
    <div>
      <h1>Counter</h1>
      <input type="text" value={count} onChange={handleChange} />

      <p>{count}</p>
      <button onClick={handleAddClick}>Add</button>
      <button onClick={() => setCount(count - 1)}>Remove</button>
    </div>
  );
};

export default Counter;
