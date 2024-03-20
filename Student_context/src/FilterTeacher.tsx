import React, { useContext, useEffect, useState } from "react";
import { GlobalStateContext } from "./GlobalContext";
import { Teacher } from "./TeacherContext";

const FilterTeacher = () => {
  const { teachers } = useContext(GlobalStateContext);
  const [uniqueCourses, setUniqueCourses] = useState<string[]>([]);
  const [selectedCourse, setSelectedCourse] = useState<string>("");
  const [filteredTeachers, setFilteredTeachers] = useState<Teacher[]>([]);

  useEffect(() => {
    const unique: string[] = teachers
      .flatMap((teacher: Teacher) => teacher.courses)
      .reduce((acc: string[], course: string) => {
        if (!acc.includes(course)) {
          acc.push(course);
        }
        return acc;
      }, []);

    setUniqueCourses(unique);
  }, [teachers]);

  useEffect(() => {
    if (selectedCourse) {
      const filtered: Teacher[] = teachers.filter((teacher: Teacher) =>
        teacher.courses.includes(selectedCourse)
      );
      setFilteredTeachers(filtered);
    } else {
      setFilteredTeachers([]);
    }
  }, [selectedCourse, teachers]);

  const handleCourseChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCourse(event.target.value);
  };

  return (
    <>
      <div>
        <select
          name="dropdown-courses"
          id="courses"
          value={selectedCourse}
          onChange={handleCourseChange}
        >
          <option value="">Courses</option>
          {uniqueCourses.map((course: string, index: number) => (
            <option key={index} value={course}>
              {course}
            </option>
          ))}
        </select>
      </div>

      <div>
        <h2>Teachers</h2>
        <ul>
          {filteredTeachers.map((teacher: Teacher, index: number) => (
            <li key={index}>{teacher.name}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default FilterTeacher;
