

const DinoInfoBox = ({ info, imagePosition }) => {
  const containerClassName = imagePosition === 'right' ? 'dino-container' : 'dino-container-reverse';
    return (
      <div className={containerClassName}>
        <div className="dino-info">
        <h2>Dinosaur Information</h2>
        <p>Name: {info.name}</p>
        <p>Discovery Year: {info.discoveryYear}</p>
        <p>Period: {info.period}</p>
        <p>Length: {info.length}</p>
        <p>Weight: {info.weight}</p>
        </div>
        <img src={info.image} alt={info.name} />
      </div>
    );
  };
  
  export default DinoInfoBox;