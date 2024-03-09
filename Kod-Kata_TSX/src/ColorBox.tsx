/* Skapa komponenten ColorBox som innehåller ett textfält, en knapp och en div. När användaren klickar på knappen ska diven få den färgen som användaren skrivit i textfältet.
UTMANING: Användaren får bara skriva korrekta och fungerande hexadecimala värden i textfältet. */

import React, { useState, useRef } from "react";

const ColorBox = () => {
  const [color, setColor] = useState("");
  const colorBoxRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    if (colorBoxRef.current) {
      colorBoxRef.current.style.backgroundColor = color;
    }
  };

  return (
    <div className="colorbox">
      <h1>Color Box</h1>
      <input onChange={(e) => setColor(e.target.value)} type="text" />
      <button onClick={handleClick}>Button</button>
      <div ref={colorBoxRef} className="color-box"></div>
    </div>
  );
};

export default ColorBox;
