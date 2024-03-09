/* Skapa komponenten PrettyText som har: textfält, kryssrutor, knapp och p-tagg. Kryssrutorna har olika val: fet stil, kursiv och textstorlek större (dvs ett kryssalternativ som sätter textstorleken till en större storlek). Användaren skriver en text och klickar i sina val sen klickar på knappen. Då visas texten ifrån textfältet i p-taggen och valen i kryssrutorna formaterar texten.

UTMANING: Lägg till en till textruta där användaren kan skriva i en färg som sedan blir bakgrundsfärg på texten.

UTMANING: Lägg till en till textruta där användaren kan skriva i en färg som sedan blir färgen på texten.

UTMANING: Lägg till fler kryssrutealternativ: bara små bokstäver (dvs texten formatteras till bara små 
    bokstäver), bara stora bokstäver, understruken text, omvänd text (dvs ordet spegelvänds så man läser det baklänges).

UTMANING: Lägg till en Ångra-knapp, dvs en knapp som om man klickar på den ändrar texten tillbaka till det som den var innan. Man ska bara kunna ångra den senaste ändringen. */

import React, { ChangeEvent, useRef, useState } from "react";

const PrettyText = () => {
  const [note, setNote] = useState("");
  const [saveNote, setSaveNote] = useState<React.ReactNode>("");
  const [prevNote, setPrevNote] = useState("");
  const [bold, setBold] = useState(false);
  const [italic, setItalic] = useState(false);
  const [larger, setLarger] = useState(false);
  const [caps, setCaps] = useState(false);
  const [underLine, setUnderLine] = useState(false);
  const [BgColor, setBgColor] = useState("");
  const [textColor, setTextColor] = useState("");
  const startRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, checked } = e.target;

    switch (id) {
      case "fet":
        setBold(checked);
        break;
      case "kursiv":
        setItalic(checked);
        break;
      case "större":
        setLarger(checked);
        break;
      case "caps":
        setCaps(checked);
        break;
      case "underline":
        setUnderLine(checked);
        break;
      default:
        break;
    }
  };

  const handleClick = () => {
    const style: React.CSSProperties = {};
    if (bold) style.fontWeight = "bold";
    if (italic) style.fontStyle = "italic";
    if (larger) style.fontSize = "larger";
    if (caps) style.textTransform = "uppercase";
    underLine && (style.textDecoration = "underline");
    if (textColor) (style.color = textColor), setTextColor("");
    if (BgColor) (style.backgroundColor = BgColor), setBgColor("");

    const formattedText: React.ReactNode = <span style={style}>{note}</span>;
    note !== "" && (setSaveNote(formattedText), setNote(""), setPrevNote(note));

    /*  colorBoxRef.current &&
      ((colorBoxRef.current.style.backgroundColor = color), setColor("")); */

    startRef.current && startRef.current.focus();
  };

  const handleUndo = () => {
    setSaveNote(prevNote);
  };

  return (
    <div>
      <h1>Pretty Text</h1>
      <input
        ref={startRef}
        value={note}
        type="text"
        onChange={(e) => setNote(e.target.value)}
      />
      <input onChange={handleChange} type="checkbox" id="fet" name="fet" />
      <label htmlFor="fet">Fet</label>
      <input
        onChange={handleChange}
        type="checkbox"
        id="kursiv"
        name="kursiv"
      />
      <label htmlFor="kursiv">Kursiv</label>
      <input
        onChange={handleChange}
        type="checkbox"
        id="större"
        name="större"
      />
      <label htmlFor="större">Större</label>
      <input type="checkbox" id="caps" name="caps" onChange={handleChange} />
      <label htmlFor="caps">Caps</label>
      <input
        type="checkbox"
        id="underline"
        name="underline"
        onChange={handleChange}
      />
      <label htmlFor="underline">Understruket</label>
      <br />
      <input
        onChange={(e) => setBgColor(e.target.value)}
        value={BgColor}
        type="text"
        id="color"
      />
      <label htmlFor="color"> Bakgrundsfärg</label>
      <br />
      <input
        type="text"
        value={textColor}
        id="textColor"
        onChange={(e) => setTextColor(e.target.value)}
      />
      <label htmlFor="textColor"> Textfärg</label>
      <br />
      <button onClick={handleClick}>Lägg till</button>
      <button onClick={handleUndo}>Ångra</button>

      <p>{saveNote}</p>
    </div>
  );
};

export default PrettyText;
