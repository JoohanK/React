import { createContext } from "react";
import { v4 as uuid } from "uuid";

export type Student = {
  id: string;
  name: string;
  age: number;
};

export const initialStudents: Student[] = [
  {
    id: uuid(),
    name: "Bosse",
    age: 34,
  },
  {
    id: uuid(),
    name: "Stina",
    age: 46,
  },
  {
    id: uuid(),
    name: "Kim",
    age: 26,
  },
  {
    id: uuid(),
    name: "Lena",
    age: 17,
  },
  {
    id: uuid(),
    name: "Leif",
    age: 15,
  },
  {
    id: uuid(),
    name: "Greger",
    age: 26,
  },
];

export const StudentContext = createContext([] as Student[]);
