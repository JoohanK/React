import { TeacherContext } from "./TeacherContext";
import { useContext } from "react";

const TeacherList = () => {
  const teachers = useContext(TeacherContext);

  return (
    <div>
      <ul>
        {teachers.map((t) => {
          return (
            <li key={t.id}>
              Name: {t.name}, Age: {t.age}, <br />
              Subject: {t.subject}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TeacherList;
