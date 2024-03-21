import { useContext, useState } from "react";
import { MonsterContext } from "./MonsterContextProvider";

const Monster = () => {
  const { state, dispatch } = useContext(MonsterContext);
  const [name, setName] = useState("");

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setName(e.target.value);
  };

  const handleClick = () => {
    dispatch({
      type: "ADD",
      payload: { name: name, eyes: 0, tentacles: 0 },
    });
  };

  return (
    <div>
      <ul>
        {state.monsters.map((m) => {
          return (
            <li>
              Name: {m.name}, Tentacles: {m.tentacles}
            </li>
          );
        })}
      </ul>
      <input type="text" onChange={handleChange} />
      <button onClick={handleClick}>Add monster</button>
    </div>
  );
};

export default Monster;
