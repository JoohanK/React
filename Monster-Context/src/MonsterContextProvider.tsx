import { createContext, useReducer } from "react";
import { v4 as uuidv4 } from "uuid";

type Monster = {
  id: string;
  name: string;
  eyes: number;
  tentacles: number;
  color: string;
  horn: boolean;
};

export type MonsterState = {
  monsters: Monster[];
};

const initialMonsterState: MonsterState = {
  monsters: [
    {
      id: uuidv4(),
      name: "Gugge",
      eyes: 3,
      tentacles: 12,
      color: "red",
      horn: true,
    },
    {
      id: uuidv4(),
      name: "Lisa",
      eyes: 26,
      tentacles: 9,
      color: "blue",
      horn: false,
    },
    {
      id: uuidv4(),
      name: "Kalle",
      eyes: 1,
      tentacles: 1,
      color: "green",
      horn: true,
    },
  ],
};

export const MonsterContext = createContext<{
  state: MonsterState;
  dispatch: React.Dispatch<Action>;
}>({
  state: initialMonsterState,
  dispatch: () => null,
});

export type Action =
  | { type: "ADD"; payload: Monster }
  | { type: "REMOVE"; payload: Monster["id"] }
  | { type: "ADD_TENTACLE"; payload: Monster["id"] }
  | { type: "TOGGLE_HORN"; payload: { id: string; currentHornState: boolean } };

const reducer = (state: MonsterState, action: Action) => {
  switch (action.type) {
    case "ADD":
      return {
        monsters: [...state.monsters, action.payload],
      };
    case "REMOVE":
      return {
        monsters: state.monsters.filter((m) => m.id !== action.payload),
      };
    case "ADD_TENTACLE":
      return {
        monsters: state.monsters.map((m) =>
          m.id === action.payload ? { ...m, tentacles: m.tentacles + 1 } : m
        ),
      };
    case "TOGGLE_HORN":
      return {
        monsters: state.monsters.map((m) =>
          m.id === action.payload.id
            ? { ...m, horn: !action.payload.currentHornState }
            : m
        ),
      };
    default:
      return state;
  }
};

type MonsterContextProviderProp = {
  children: React.ReactNode;
};
function MonsterContextProvider({ children }: MonsterContextProviderProp) {
  const [state, dispatch] = useReducer(reducer, initialMonsterState);

  return (
    <MonsterContext.Provider value={{ state, dispatch }}>
      {children}
    </MonsterContext.Provider>
  );
}

export default MonsterContextProvider;
