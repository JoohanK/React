/* Skapa den nya Planet-komponenten som tar emot en prop som är ett nummer och som visar upp data om planeten i APIet med det numret.
 */
import React, { useEffect, useRef, useState } from "react";

type PlanetProps = {
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
  residents: string[];
};

const Planet = ({ planetnumber }) => {
  const [planet, setPlanet] = useState<PlanetProps | null>(null);

  useEffect(() => {
    const url = "https://swapi.dev/api/planets/";
    const fetchPlanet = async () => {
      const response = await fetch(url);
      const planetData = await response.json();
      setPlanet(planetData.results[planetnumber]);
    };
    let ignore = false;
    if (!ignore) {
      fetchPlanet();
    }
  }, [planetnumber]);
  if (!planet) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{planet}</h1>
      <div className="planet-box">{planet}</div>
    </div>
  );
};

export default Planet;
