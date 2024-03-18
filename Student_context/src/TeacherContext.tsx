import { createContext } from "react";
import { v4 as uuid } from "uuid";

type Teacher = {
  id: string;
  name: string;
  age: number;
  subject: string;
};

export const initialTeachers: Teacher[] = [
  {
    id: uuid(),
    name: "Niklas",
    age: 49,
    subject: "Programming",
  },
  {
    id: uuid(),
    name: "Lars",
    age: 53,
    subject: "Math",
  },
  {
    id: uuid(),
    name: "Andreas",
    age: 32,
    subject: "Physics",
  },
];

export const TeacherContext = createContext([] as Teacher[]);
