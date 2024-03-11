import React, { useEffect, useState } from "react";

type SWPerson = {
  name: string;
  eye_color: string;
  birth_year: string;
};

const Person = () => {
  const [person, setPerson] = useState({} as SWPerson);

  useEffect(() => {
    const url = "https://swapi.py4e.com/api/people/1/";

    const fetchLuke = async () => {
      const result = await fetch(url);
      const luke = await result.json();
      console.log(luke);
      if (!ignore) {
        setPerson({
          name: luke.name,
          eye_color: luke.eye_color,
          birth_year: luke.birth_year,
        });
      }
    };

    let ignore = false;
    fetchLuke();
    return () => {
      ignore = true;
    };
  }, []);

  return (
    <div>
      <h1>hej </h1>
      {person
        ? `Name: ${person.name}, Eyes: ${person.eye_color}, Birth year: ${person.birth_year}`
        : "Loading..."}
    </div>
  );
};

export default Person;
