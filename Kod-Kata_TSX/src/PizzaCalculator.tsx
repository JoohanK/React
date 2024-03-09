/* 🍕 Gör en komponent PizzaCalculator som har ett inputfält för antal pizzor och en knapp samt p-tagg. Användaren fyller i antal pizzor hen vill ha och klickar på knappen. Priset räknas ut utifrån antal och totalen visas i p-taggen.
UTMANING: Lägg till tre radioknappar för olika storlekar på pizzorna. Priset räknas ut utifrån storlek och antal.
UTMANING: Lägg till extra toppings med kryssrutor som påverkar priset. */

import React, { useRef, useState } from "react";

type Pizza = {
  pizzaPrice: number;
};

const PizzaCalculator: React.FC<Pizza> = ({ pizzaPrice }) => {
  const [price, setPrice] = useState<number>(0);
  const [size, setSize] = useState("");
  const [onion, setOnion] = useState(false);
  const [cheese, setCheese] = useState(false);
  const [meat, setMeat] = useState(false);
  const amountRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    if (amountRef.current && size && amountRef.current.value !== "") {
      const amount = parseInt(amountRef.current.value);
      amountRef.current.value = "0";
      let sizePrice = 0;

      switch (size) {
        case "small":
          sizePrice = -20;
          break;
        case "medium":
          sizePrice = 0;
          break;
        case "large":
          sizePrice = +20;
          break;
        default:
          break;
      }

      let toppingPrice = 0;
      onion && (toppingPrice += 10);
      cheese && (toppingPrice += 10);
      meat && (toppingPrice += 10);

      setPrice(
        amount * pizzaPrice + sizePrice * amount + toppingPrice * amount
      );
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, checked } = e.target;

    switch (id) {
      case "onion":
        setOnion(checked);
        break;
      case "cheese":
        setCheese(checked);
        break;
      case "meat":
        setMeat(checked);
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <h1>Pizza Calculator</h1>
      <label htmlFor="amount">How many pizzas?</label>
      <br />
      <input ref={amountRef} type="number" id="amount" name="amount" />
      <input
        type="radio"
        id="small"
        name="size"
        checked={size === "small"}
        onChange={() => setSize("small")}
      />
      <label htmlFor="small">Small</label>
      <input
        type="radio"
        id="medium"
        name="size"
        checked={size === "medium"}
        onChange={() => setSize("medium")}
      />
      <label htmlFor="medium">Medium</label>
      <input
        type="radio"
        id="large"
        name="size"
        checked={size === "large"}
        onChange={() => setSize("large")}
      />
      <label htmlFor="large">Large</label>
      <br />
      <label htmlFor="onion">Extra: </label>
      <input type="checkbox" id="onion" name="onion" onChange={handleChange} />
      <label htmlFor="onion">Onion</label>
      <input
        type="checkbox"
        id="cheese"
        name="cheese"
        onChange={handleChange}
      />
      <label htmlFor="checkbox">Cheese</label>
      <input type="checkbox" id="meat" name="meat" onChange={handleChange} />
      <label htmlFor="meat">Meat</label>
      <br />
      <button onClick={handleClick}>See price</button>
      <p>Cost: {price}</p>
    </div>
  );
};

export default PizzaCalculator;
