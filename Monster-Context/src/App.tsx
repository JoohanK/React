import Monster from "./Monster";
import MonsterContextProvider from "./MonsterContextProvider";

function App() {
  return (
    <MonsterContextProvider>
      <h1>Demo</h1>
      <Monster />
    </MonsterContextProvider>
  );
}

export default App;
