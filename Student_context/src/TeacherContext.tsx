import { createContext } from "react";
import { v4 as uuid } from "uuid";

export type Teacher = {
  id: string;
  name: string;
  age: number;
  subject: string[];
  courses: string[];
};

export const initialTeachers: Teacher[] = [
  {
    id: uuid(),
    name: "Niklas",
    age: 49,
    subject: ["Programming", "Math", "Physics"],
    courses: ["Programming 101", "Math 101", "Physics 101"],
  },
  {
    id: uuid(),
    name: "Lars",
    age: 53,
    subject: ["Biologi", "Sports"],
    courses: ["Biologi 101", "Sports 101"],
  },
  {
    id: uuid(),
    name: "Andreas",
    age: 32,
    subject: ["Spanish", "English", "History"],
    courses: ["Spanish 101", "English 101", "History 101"],
  },
  {
    id: uuid(),
    name: "Karl",
    age: 38,
    subject: ["Italian", "Branding", "System Development"],
    courses: ["Italian 101", "Branding 101", "System Development 101"],
  },
  {
    id: uuid(),
    name: "Peter",
    age: 40,
    subject: ["Programming", "Sports"],
    courses: ["Programming 101", "Sports 10"],
  },
  {
    id: uuid(),
    name: "David",
    age: 34,
    subject: ["Spanish", "English", "History"],
    courses: ["Spanish 101", "English 101", "History 101"],
  },
];

export const TeacherContext = createContext([] as Teacher[]);
