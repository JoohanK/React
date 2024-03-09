/* 
Skapa en ny komponent DropDown som har en ruta för att visa text och en dropdown. När man väljer ngt val i dropdownen så ska det visas i textrutan. Komponenten kan ta emot en array med fordon som läggs till i dropdownen.
 */

import React, { useState } from "react";

const DropDown = ({ carArray }) => {
  const [car, setCar] = useState("");

  const handleChange = (e) => setCar(e.target.value);

  const carList = carArray.map((car, index) => {
    return <option key={index}>{car}</option>;
  });

  return (
    <>
      <select name="car" id="car-select" onChange={handleChange}>
        <option value="">--Please choose an option--</option>
        {carList}
      </select>
      <p>{car}</p>
    </>
  );
};

export default DropDown;
