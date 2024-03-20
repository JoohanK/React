import { GlobalStateContext } from "./GlobalContext";
import { useContext, useState } from "react";

const StudentList = () => {
  const students = useContext(GlobalStateContext).students;
  const [filter, setFilter] = useState("alla");

  const filterStudents = () => {
    switch (filter) {
      case "myndig":
        return students.filter((student) => student.age >= 18);
      case "omyndig":
        return students.filter((student) => student.age < 18);
      default:
        return students;
    }
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <div>
      <input
        type="radio"
        name="sort-students"
        value="alla"
        checked={filter === "alla"}
        onChange={handleFilterChange}
      />
      <label htmlFor="alla">Show all</label>
      <input
        type="radio"
        name="sort-students"
        value="myndig"
        checked={filter === "myndig"}
        onChange={handleFilterChange}
      />
      <label htmlFor="myndig">Adult</label>
      <input
        type="radio"
        name="sort-students"
        value="omyndig"
        checked={filter === "omyndig"}
        onChange={handleFilterChange}
      />
      <label htmlFor="omyndig">Not adult</label>

      <ul>
        {filterStudents().map((s) => {
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
