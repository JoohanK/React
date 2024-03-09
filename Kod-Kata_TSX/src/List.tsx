/* Skapa komponenten List som har ett textfält, knapp och ul. När användaren klickar på knappen ska en ny punkt läggas till i listan med det som stod i textfältet.
UTMANING: Töm textfältet när man klickar på knappen och sätt tillbaka fokus på textfältet. Tänk på taborder.
UTMANING: Lägg till en dropdown med ett antal emojis på djur. När användaren klickar på knappen ska emojin och texten läggas till listan. */

import React, { useRef, useState } from "react";

const List = () => {
  const [note, setNote] = useState("");
  const [noteList, setNoteList] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    if (note !== "") {
      setNoteList([...noteList, note]);
      setNote("");
      inputRef.current && inputRef.current.focus();
    }
  };

  const handleChange = (emoji: string) => {
    setNote((prevNote) => prevNote + emoji);
    inputRef.current && inputRef.current.focus();
  };

  return (
    <div>
      <h1>Emoji</h1>
      <input
        ref={inputRef}
        value={note}
        onChange={(e) => setNote(e.target.value)}
        type="text"
      />
      <label htmlFor="emoji-select"></label>
      <select
        name="emojis"
        id="emoji-select"
        onChange={(e) => handleChange(e.target.value)}
      >
        <option value=""></option>
        <option value="🙂">🙂</option>
        <option value="😃">😃</option>
        <option value="😔">😔</option>
        <option value="❤️">❤️</option>
        <option value="😂">😂</option>
      </select>
      <button onClick={handleClick}>Button</button>
      <ul>
        {noteList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default List;
