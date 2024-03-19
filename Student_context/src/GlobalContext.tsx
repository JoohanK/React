import { createContext } from "react";
import { Student } from "./studentContext";
import { Teacher } from "./TeacherContext";

export type GlobalState = {
  students: Student[];
  teachers: Teacher[];
};

// Skapa en kontext för GlobalState
export const GlobalStateContext = createContext<GlobalState | null>(null);
