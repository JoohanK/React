import { useState } from "react";

const Radio = () => {
  const [drone, setDrone] = useState("");

  const handleClick = (e) => setDrone(e.target.value);

  return (
    <>
      <div>
        <input
          onClick={handleClick}
          type="radio"
          id="huey"
          name="drone"
          value="Hello Huey!"
        />
        <label htmlFor="huey">Huey</label>
      </div>
      <div>
        <input
          onClick={handleClick}
          type="radio"
          id="dewey"
          name="drone"
          value="Hello Dewey!"
        />
        <label htmlFor="dewey">Dewey</label>
      </div>
      <div>
        <input
          onClick={handleClick}
          type="radio"
          id="louie"
          name="drone"
          value="Hello Louie!"
        />
        <label htmlFor="louie">Louie</label>
      </div>
      <div>
        <p>{drone}</p>
      </div>
    </>
  );
};

export default Radio;
