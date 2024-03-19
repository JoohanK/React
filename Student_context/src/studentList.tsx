// komponent för att visa alla studenter (namn)

import { GlobalStateContext } from "./GlobalContext";
import { StudentContext } from "./studentContext";
import { useContext } from "react";

const StudentList = () => {
  const students = useContext(GlobalStateContext).students;

  return (
    <div>
      <ul>
        {students.map((s) => {
          return (
            <li key={s.id}>
              Name: {s.name}, Age: {s.age}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default StudentList;
