const List = ({ animalArray }) => {
  const displayAnimal = animalArray.map((animal, index) => {
    return <li key={index}>{animal}</li>;
  });

  return <ul>{displayAnimal}</ul>;
};

export default List;
