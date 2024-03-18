// komponent för att visa alla studenter (namn)

import { StudentContext } from "./studentContext";
import { useContext } from "react";

const StudentList = () => {
  const students = useContext(StudentContext);

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
