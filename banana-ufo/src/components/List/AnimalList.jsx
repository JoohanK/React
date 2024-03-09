
const List = ({ animals, ordered }) => {
  const ListComponent = ordered ? 'ol' : 'ul';
  
    return (
        <>
        <h2>Animals List:</h2>
        <ListComponent>
          {animals.map((animal, index) => (
            <li key={index}>{animal}</li>
          ))}
        </ListComponent>
        </>
    );
  };
  
  export default List;