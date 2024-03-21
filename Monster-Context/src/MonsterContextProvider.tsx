import { createContext, useReducer } from "react";

type Monster = {
  name: string;
  eyes: number;
  tentacles: number;
};

// GlobalState
type MonsterState = {
  monsters: Monster[];
};

const initialMonsterState: MonsterState = {
  monsters: [
    {
      name: "Gugge",
      eyes: 3,
      tentacles: 12,
    },
    {
      name: "Lisa",
      eyes: 26,
      tentacles: 9,
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

type Action =
  | { type: "ADD"; payload: Monster }
  | { type: "REMOVE"; payload: string };

const reducer = (state: MonsterState, action: Action) => {
  switch (action.type) {
    case "ADD":
      return {
        monsters: [...state.monsters, action.payload],
      };
    case "REMOVE":
      return state; // detta ska ändras! Remove fungerar inte
    default:
      return state;
  }
};

type MonsterContextProviderProp = {
  children: React.ReactNode;
};
function MonsterContextProvider({ children }: MonsterContextProviderProp) {
  // här kan vi använda useReducer eller useState

  const [state, dispatch] = useReducer(reducer, initialMonsterState);

  return (
    <MonsterContext.Provider value={{ state, dispatch }}>
      {children}
    </MonsterContext.Provider>
  );
}

export default MonsterContextProvider;
