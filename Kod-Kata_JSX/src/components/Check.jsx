import { useState } from "react";

const Check = () => {
  const [cat, setCat] = useState(false);
  const [dog, setDog] = useState(false);

  const handleChangeCat = () => setCat(!cat);

  const handleChangeDog = () => setDog(!dog);

  return (
    <>
      <input onChange={handleChangeCat} type="checkbox" id="Cat" />
      <label htmlFor="Car">Katt</label>
      <input onChange={handleChangeDog} type="checkbox" id="Dog" />
      <label htmlFor="Dog">Hund</label>

      <p>
        {cat && "Katt"} {cat && dog && "och"} {dog && "Hund"}
      </p>
    </>
  );
};

export default Check;
