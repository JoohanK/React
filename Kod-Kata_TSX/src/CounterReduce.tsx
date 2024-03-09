/* Counter-komponenten ska ha en p-tagg (eller annan tagg) för att visa siffran vi räknar upp/ner. Två knappar för att räkna upp och ner. All logik i reducer-funktionen och vi använder enbart userReducer istf useState. */
/* 
UTMANING:
Lägg till ett inputfält där man ska kunna skriva en siffra och lägg till en knapp Add som lägger till siffran till count. Hint: payload
Bygg en robust komponent där vi inte har några röda squiggly lines eller får error. */

import React, { useReducer, useRef } from "react";

const ACTION = {
  ADD: "add",
  REMOVE: "remove",
  RESET: "reset",
  ADD_10: "add10",
  HALF: "half",
  ADD_INPUT: "addInput",
};

type State = { count: number };
type Action = { type: string; payload?: number };

const counterReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ACTION.ADD:
      return { count: state.count + 1 };
    case ACTION.REMOVE:
      return { count: state.count - 1 };
    case ACTION.RESET:
      return { count: (state.count = 0) };
    case ACTION.ADD_10:
      return { count: state.count + (action.payload || 0) };
    case ACTION.HALF:
      return { count: Math.ceil(state.count / 2) };
    case ACTION.ADD_INPUT:
      return { count: state.count + (action.payload || 0) };
    default:
      return state;
  }
};

const CounterR = () => {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });
  const inputValueRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    const valueToAdd = parseInt(inputValueRef.current!.value);
    if (!isNaN(valueToAdd)) {
      dispatch({ type: "addInput", payload: valueToAdd });
    }
  };

  return (
    <div>
      <h1>Counter Reduce</h1>
      <h2>Count: {state.count} </h2>
      <input ref={inputValueRef} type="number" />
      <button onClick={handleClick}>Add</button>
      <br />
      <button onClick={() => dispatch({ type: ACTION.ADD })}>+1</button>
      <button onClick={() => dispatch({ type: ACTION.REMOVE })}>-1</button>
      <button onClick={() => dispatch({ type: ACTION.RESET })}>Reset</button>
      <button onClick={() => dispatch({ type: ACTION.ADD_10, payload: 10 })}>
        Add 10
      </button>
      <button onClick={() => dispatch({ type: ACTION.HALF })}>Half</button>
    </div>
  );
};

export default CounterR;
