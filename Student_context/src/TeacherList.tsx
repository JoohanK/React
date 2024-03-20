import { GlobalStateContext } from "./GlobalContext";
import { Teacher } from "./TeacherContext";
import { useContext } from "react";

const TeacherList = () => {
  const teachers = useContext(GlobalStateContext).teachers;

  return (
    <div>
      <ul>
        {teachers.map((t: Teacher) => {
          return (
            <li key={t.id}>
              Name: {t.name}, Age: {t.age}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TeacherList;
