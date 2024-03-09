/* En ny komponent ChangeText innehåller ett input-fält för text, en knapp och en p-tagg. När man klickar på knappen så kopieras texten från input till p-taggen.
 */
import React, { useState } from "react";

const ChangeText: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [saveText, setSaveText] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleClick = () => {
    inputValue !== "" && (setSaveText(inputValue), setInputValue(""));
  };

  return (
    <div>
      <h1>Change Text</h1>
      <input value={inputValue} onChange={handleChange} type="text" />
      <button onClick={handleClick}>Change Text</button>
      <p>{saveText}</p>
    </div>
  );
};

export default ChangeText;
