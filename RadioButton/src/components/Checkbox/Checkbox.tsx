import React from "react";

/* Gör en komponent som ser ut som en knapp men den fungerar mer som en checkbox. 
När man klickar i den får den en ny ram (eller något annat nytt utseende).
 En animation vid hover och en när man klickar. */

type checkboxProps = {
  toggleChecked: () => void;
  checked: boolean;
};

const Checkbox = ({ toggleChecked, checked }: checkboxProps) => {
  return (
    <div
      className={`checkbox ${checked ? "checked" : ""}`}
      onClick={toggleChecked}
    ></div>
  );
};

export default Checkbox;
