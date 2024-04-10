import { useState } from "react";
import RadioButton from "./components/RadioButton/RadioButton";
import "./sass/main.scss";
import Checkbox from "./components/Checkbox/Checkbox";

function App() {
  const [checked, setChecked] = useState(false);

  const toggleChecked = () => {
    setChecked(!checked);
  };

  return (
    <>
      <RadioButton toggleChecked={toggleChecked} checked={checked} />
      <Checkbox toggleChecked={toggleChecked} checked={checked} />
    </>
  );
}

export default App;
