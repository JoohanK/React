/* En ny komponent Addition som har två inputfält och en knapp samt en p-tagg. När användaren klickar på knappen ska siffrorna i fälten adderas och summan visas i p-taggen.
UTMANING: Se till att komponenten Addition fungerar oavsett vad användaren stoppar i textfälten. Töm fälten när man klickar på knappen. Sätt fokus tillbaka på första textfältet. Se till att taborder är korrekt. */

import React, { useState, useRef } from "react";

const Addition = () => {
  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");
  const [result, setResult] = useState("");

  const firstInputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    setNumber1("");
    setNumber2("");

    if (!isNaN(Number(number1)) && !isNaN(Number(number2))) {
      setResult((Number(number1) + Number(number2)).toString());
    } else {
      setResult(number1 + number2);
    }

    firstInputRef.current && firstInputRef.current.focus();
  };

  return (
    <div>
      <h1>Addition</h1>
      <input
        type="text"
        name="firstNumber"
        value={number1}
        onChange={(e) => setNumber1(e.target.value)}
        ref={firstInputRef}
      />
      <input
        type="text"
        name="secondNumber"
        value={number2}
        onChange={(e) => setNumber2(e.target.value)}
      />
      <button onClick={handleClick}>Addition</button>
      <p>Resultat: {result}</p>
    </div>
  );
};

export default Addition;
