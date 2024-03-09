import "./App.css";
import "./ColorBox.css";
import Counter from "./Counter";
import Header from "./Header";
import ChangeText from "./ChangeText";
import Addition from "./Addition";
import PokemonList from "./Pokemon";
import ColorBox from "./ColorBox";
import List from "./List";
import PrettyText from "./PrettyText";
import PizzaCalculator from "./PizzaCalculator";
import CounterR from "./CounterReduce";
import Stringer from "./Stringer";

function App() {
  return (
    <>
      <Header title="Hello World" level={12}>
        TYPESCRIPT KATA
      </Header>
      <Counter />
      <ChangeText />
      <Addition />
      <PokemonList />
      <ColorBox />
      <List />
      <PrettyText />
      <PizzaCalculator pizzaPrice={105} />
      <CounterR />
      <Stringer />
    </>
  );
}

export default App;
