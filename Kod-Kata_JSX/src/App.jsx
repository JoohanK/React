import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import RepeatText from "./components/RepeatText";
import List from "./components/List";
import Counter from "./components/Counter";
import Check from "./components/Check";
import Radio from "./components/Radio";
import DropDown from "./components/DropDown";
import ToDo from "./components/ToDo";

function App() {
  /*  const [count, setCount] = useState(0) */

  return (
    <>
      <Header headerText={"HEADER"}></Header>
      <RepeatText count={4} text={"Jag gillar tacos"}></RepeatText>
      <List animalArray={["Dog", "Cat", "Cow", "Horse"]}></List>
      <Counter />
      <br />
      <br />
      <Check />
      <Radio />
      {<DropDown carArray={["Volvo", "Ford", "Tesla", "Toyota"]}></DropDown>}
      <ToDo />
    </>
  );
}

export default App;
