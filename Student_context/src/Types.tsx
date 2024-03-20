type Motorboat = {
  type: "motorboat";
  name: string;
  color: string;
  outsidemotor: boolean;
};
type Sailingboat = {
  type: "sailingboat";
  name: string;
  color: string;
  motor: boolean;
  sails: number;
};

type Boat = Motorboat | Sailingboat;

type Car = {
  type: "car";
  name: string;
  doors: number;
  wheels: number;
  color: string;
  draghook: boolean;
  year: number;
};

type MC2wheel = {
  type: "mc2wheel";
  name: string;
  wheels: number;
  year: number;
  color: string;
  offroad: boolean;
};

type MC3wheel = {
  type: "mc3wheel";
  name: string;
  year: number;
  color: string;
  offroad: false;
};

type Motorcycle = MC2wheel | MC3wheel;

type Vehicle = Boat | Car | Motorcycle;

type VehicleProps = {
  vehicles: Vehicle[];
};

const VehicleComponent = ({ vehicles }: VehicleProps) => {
  return (
    <div>
      <h2>Vehicle List</h2>
      {vehicles.map((vehicle, index) => (
        <div key={index}>
          <h3>{vehicle.name}</h3>
          <p>Type: {vehicle.type}</p>
          {vehicle.type === "car" && (
            <div>
              <p>Doors: {vehicle.doors}</p>
              <p>Wheels: {vehicle.wheels}</p>
              <p>Color: {vehicle.color}</p>
              <p>Drag Hook: {vehicle.draghook ? "Yes" : "No"}</p>
              <p>Year: {vehicle.year}</p>
            </div>
          )}
          {vehicle.type === "boat" && (
            <div>
              <p>Color: {vehicle.color}</p>
              <p>Outside Motor: {vehicle.outsidemotor ? "Yes" : "No"}</p>
            </div>
          )}
          {vehicle.type === "motorcycle" && (
            <div>
              <p>Wheels: {vehicle.wheels}</p>
              <p>Color: {vehicle.color}</p>
              <p>Year: {vehicle.year}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default VehicleComponent;
