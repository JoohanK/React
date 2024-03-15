import "./App.css";
import Person from "./person.tsx";
import JediDropDown from "./JediDropDown.tsx";
import Planet from "./Planet.tsx";

function App() {
  return (
    <>
      {/* <Person />
      <JediDropDown /> */}
      <Planet planetnumber={2} />
    </>
  );
}

export default App;
