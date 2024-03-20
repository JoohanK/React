import React, { useContext, useRef, useState } from "react";
import { GlobalStateContext } from "./GlobalContext";
import { Teacher } from "./TeacherContext";

const SearchTeacher = () => {
  const { teachers } = useContext(GlobalStateContext);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    const filteredTeachers = teachers.filter((teacher: Teacher) => {
      return teacher.name.toLowerCase().includes(search.toLowerCase());
    });
    setSearchResults(filteredTeachers);
  };

  return (
    <>
      <div>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
        <ul>
          {searchResults.map((teacher: Teacher, index) => (
            <li key={index}>
              {teacher.name} <br /> Age: {teacher.age} <br /> Subjects: <br />{" "}
              {teacher.subject.map((subject, index) => (
                <span key={index}>
                  {index > 0 && ", "} {subject}
                </span>
              ))}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default SearchTeacher;
