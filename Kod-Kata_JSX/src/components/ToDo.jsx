/* Skapa en ny komponent ToDo som har en textruta, en knapp och en ul-lista. När man klickar på knappen så läggs texten i textrutan till som en punkt i ul-listan. Ifall textrutan är tom så läggs inget till. */

/* När man klickar på ett element i listan så tas det bort. */

import React, { useState } from "react";

const ToDo = () => {
  const [text, setText] = useState("");
  const [notes, setNotes] = useState([]);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  /*   const handleClick = () => {
    if (text.trim() !== "") {
      setNotes([...notes, text]);
      setText("");
    }
  }; */

  const handleClick = () => {
    text.trim() !== "" && setNotes([...notes, text]), setText("");
  };

  const handleClickRemove = (indexToRemove) => {
    setNotes(notes.filter((kebab, index) => index !== indexToRemove));
  };

  return (
    <>
      <input type="text" value={text} onChange={handleChange} />
      <button onClick={handleClick}>Add</button>
      <ul>
        {notes.map((note, index) => (
          <li onClick={() => handleClickRemove(index)} key={index}>
            {note}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ToDo;
