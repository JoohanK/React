import React, { useEffect, useState } from "react";

const JediDropDown = () => {
  const [jediList, setJediList] = useState([]);
  const [selectedJedi, setSelectedJedi] = useState({});

  useEffect(() => {
    const url = "https://swapi.py4e.com/api/people/";

    const fetchJedi = async () => {
      const result = await fetch(url);
      const jedis = await result.json();
      console.log(jediList);

      if (!ignore) {
        setJediList(jedis.results);
      }
    };

    let ignore = false;
    fetchJedi();
    return () => {
      ignore = true;
    };
  }, []);

  const handleChange = (e) => {
    const selectedJediName = e.target.value;
    const foundJedi = jediList.find((jedi) => jedi.name === selectedJediName);
    setSelectedJedi(foundJedi);
  };

  return (
    <div>
      <select onChange={handleChange} name="jedi-dropdown" id="">
        <option value="">Jedi</option>
        {jediList.map((jedi) => (
          <option key={jedi.name} value={jedi.name}>
            {jedi.name}
          </option>
        ))}
      </select>
      <div className="jedi-box">
        {selectedJedi && (
          <>
            <h2>{selectedJedi.name}</h2>
            <p>Height: {selectedJedi.height}</p>
            <p>Mass: {selectedJedi.mass}</p>
            <p>Birth year: {selectedJedi.birth_year}</p>
            <p>Eye color: {selectedJedi.eye_color}</p>
            <p>Starships:</p>
            <ul>
              {selectedJedi.starships ? (
                selectedJedi.starships.map((starship, index) => (
                  <li key={index}>{starship}</li>
                ))
              ) : (
                <li>None</li>
              )}
            </ul>
          </>
        )}
      </div>
    </div>
  );
};

export default JediDropDown;
