import { StudentContext } from "./studentContext";
import StudentList from "./studentList";
import { initialStudents } from "./studentContext";
import { TeacherContext } from "./TeacherContext";
import { initialTeachers } from "./TeacherContext";
import TeacherList from "./TeacherList";

import "./App.css";

function App() {
  return (
    <>
      <h1>Context</h1>
      <StudentContext.Provider value={initialStudents}>
        <h2>Student Context</h2>
        <StudentList />
      </StudentContext.Provider>
      <TeacherContext.Provider value={initialTeachers}>
        <h2>Teacher Context</h2>
        <TeacherList />
      </TeacherContext.Provider>
    </>
  );
}

export default App;
