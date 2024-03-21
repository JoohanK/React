import React, { ChangeEvent, useContext, useState } from "react";
import { MonsterContext, Action } from "./MonsterContextProvider";
import { v4 as uuidv4 } from "uuid";

const Monster: React.FC = () => {
  const { state, dispatch } = useContext(MonsterContext);
  const [newMonster, setNewMonster] = useState({
    name: "",
    eyes: 0,
    tentacles: 0,
    color: "",
    horn: false,
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    const newValue =
      type === "checkbox"
        ? (e.target as HTMLInputElement).checked
        : type === "number"
        ? parseInt(value, 10)
        : value;
    setNewMonster((prevMonster) => ({
      ...prevMonster,
      [name]: newValue,
    }));
  };

  const handleClick = () => {
    const action: Action = {
      type: "ADD",
      payload: {
        ...newMonster,
        id: uuidv4(),
      },
    };
    dispatch(action);

    setNewMonster({
      name: "",
      eyes: 0,
      tentacles: 0,
      color: "",
      horn: false,
    });
  };

  const handleDelete = (id: string) => {
    const action: Action = {
      type: "REMOVE",
      payload: id,
    };
    dispatch(action);
  };
  const handleAddTentacle = (id: string) => {
    const action: Action = {
      type: "ADD_TENTACLE",
      payload: id,
    };
    dispatch(action);
  };

  const handleToggleHorn = (id: string, currentHornState: boolean) => {
    const action: Action = {
      type: "TOGGLE_HORN",
      payload: { id, currentHornState },
    };
    dispatch(action);
  };

  return (
    <div>
      <ul>
        {state.monsters.map((m) => (
          <li key={m.id}>
            Name: {m.name}, Tentacles: {m.tentacles}, Eyes: {m.eyes}, Color:{" "}
            {m.color}, Horn: {m.horn ? "Yes" : "No"}
            <button onClick={() => handleDelete(m.id)}>Delete</button>
            <button onClick={() => handleAddTentacle(m.id)}>
              Add Tentacle
            </button>
            <button onClick={() => handleToggleHorn(m.id, m.horn)}>
              {m.horn ? "Remove Horns" : "Add Horns"}
            </button>
          </li>
        ))}
      </ul>
      <input
        type="text"
        name="name"
        value={newMonster.name}
        onChange={handleChange}
        placeholder="Name"
      />
      <input
        type="number"
        name="eyes"
        value={newMonster.eyes}
        onChange={handleChange}
        placeholder="Eyes"
      />
      <input
        type="number"
        name="tentacles"
        value={newMonster.tentacles}
        onChange={handleChange}
        placeholder="Tentacles"
      />
      <input
        type="text"
        name="color"
        value={newMonster.color}
        onChange={handleChange}
        placeholder="Color"
      />
      <input
        type="checkbox"
        name="horn"
        checked={newMonster.horn}
        onChange={handleChange}
      />
      <label htmlFor="horn">Horns</label>
      <br />
      <button onClick={handleClick}>Add monster</button>
    </div>
  );
};

export default Monster;
