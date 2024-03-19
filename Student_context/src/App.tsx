import React from "react";
import StudentList from "./studentList";
import TeacherList from "./TeacherList";
import { GlobalStateContext } from "./GlobalContext";
import { initialStudents } from "./studentContext";
import { initialTeachers } from "./TeacherContext";

import "./App.css";

function App() {
  return (
    <>
      <h1>Context</h1>
      <GlobalStateContext.Provider
        value={{ students: initialStudents, teachers: initialTeachers }}
      >
        <h2>Student Context</h2>
        <StudentList />
        <h2>Teacher Context</h2>
        <TeacherList />
      </GlobalStateContext.Provider>
    </>
  );
}

export default App;
