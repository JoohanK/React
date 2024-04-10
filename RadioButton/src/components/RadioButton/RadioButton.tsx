import React from "react";

/* Gör en radio button med en animerad hover-effekt. Lägg till en till animation när man klickar på den och ytterligare ett utseende när den är iklickad. Med så mkt CSS som möjligt. */

type radioButtonProps = {
  toggleChecked: () => void;
  checked: boolean;
};

const RadioButton = ({ toggleChecked, checked }: radioButtonProps) => {
  return (
    <div className="radio-button">
      <input
        className={`first ${checked ? "checked" : ""}`}
        type="radio"
        id="radio-button"
        name="test"
      />
      <label onClick={toggleChecked}>First</label>
      <input
        className={`second ${checked ? "checked" : ""}`}
        type="radio"
        id="radio"
        name="test"
      />
      <label onClick={toggleChecked}>Second</label>
    </div>
  );
};

export default RadioButton;
