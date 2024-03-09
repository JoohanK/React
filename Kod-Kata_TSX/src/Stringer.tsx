/* 2 Sträng 🏴‍☠️
Vi ska nu skapa en komponent Stringer som fungerar lite liknande som Counter fast vi ska lagra en sträng i state istf en siffra. Vi ska ha en knapp Add R som lägger till ett “R” till strängen så strängen blir en bokstav längre. Add lägger till ett R som sista bokstav. Ha en tagg där du visar upp state.

Ingen copy-paste! Läs din kod och skriv från minnet.

När du fått Stringer att fungera så lägger vi till följande:
En reset-knapp som återställer state-strängen till en tom sträng
En Add XYZ som lägger till strängen “XYZ” sist i state-strängen

UTMANING:
Lägg till ett textfält där man ska kunna skriva en bokstav och lägg till en knapp Add som lägger till en bokstav från input till strängen. Man ska bara kunna skriva en bokstav i textfältet.
Lägg till en Remove-knapp som tar bort sista bokstaven i strängen
Bygg en robust komponent där vi inte har några röda squiggly lines eller får error.
 */

import React, { useReducer, useRef } from "react";

type State = { letters: string };
type Action = { type: string; payload?: string };

const ACTION = {
  ADD_R: "add_r",
  RESET: "reset",
  ADD_XYZ: "add_xyz",
  ADD_LETTER: "add_letter",
  RESET_LETTER: "reset_letter",
};

const StringerAdd = (state: State, action: Action) => {
  switch (action.type) {
    case ACTION.ADD_R:
      return { letters: state.letters + "R" };
    case ACTION.ADD_XYZ:
      return { letters: state.letters + "XYZ" };
    case ACTION.RESET:
      return { letters: (state.letters = "") };
    case ACTION.RESET_LETTER:
      return { letters: state.letters.slice(0, -1) };
    case ACTION.ADD_LETTER:
      return { letters: state.letters + action.payload };
    default:
      return state;
  }
};

const Stringer = () => {
  const [state, dispatch] = useReducer(StringerAdd, { letters: "" });
  const inputRef = useRef<HTMLInputElement>(null);

  const handleAddClick = () => {
    const inputValue = inputRef.current!.value;
    dispatch({ type: ACTION.ADD_LETTER, payload: inputValue });
    inputRef.current!.value = "";
  };

  return (
    <div>
      <h1>Stringer</h1>
      <h2>{state.letters}</h2>
      <button onClick={() => dispatch({ type: ACTION.ADD_R })}>Add R</button>
      <button onClick={() => dispatch({ type: ACTION.ADD_XYZ })}>
        Add XYZ
      </button>
      <button onClick={() => dispatch({ type: ACTION.RESET })}>
        Reset All
      </button>
      <button onClick={() => dispatch({ type: ACTION.RESET_LETTER })}>
        Reset one
      </button>
      <br />
      <input ref={inputRef} type="text" maxLength={1} />
      <button onClick={handleAddClick}>Add Letter</button>
    </div>
  );
};

export default Stringer;
