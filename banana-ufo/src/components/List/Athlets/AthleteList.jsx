import { useState } from "react";
/* const AthletsList = ({ Athlets }) => {
    const renderAthlets = () => {
        return Athlets.map((athlete, index) => (
            <div key={index}>
                <p>{athlete.name} har vunnit {athlete.gold} guld.</p>
            </div>
        ));
    };

    return (
        <div>
            <h2>Lista över idrottare</h2>
            {renderAthlets()}
        </div>
    );
};

export default AthletsList; */




const AthleteList = ({ info }) => {
    const [gold, setGold] = useState(info);

    const handleClick = (index) => {
        setGold(prevGold => {
            return prevGold.map((athlete, i) => {
                if (i === index) {
                    return { ...athlete, gold: athlete.gold + 1 };
                }
                return athlete;
            });
        });
    }

    const handleClickSub = (index) => {
        setGold(prevGold => {
            return prevGold.map((athlete, i) => {
                if (i === index && athlete.gold > 0) {
                    return { ...athlete, gold: athlete.gold - 1 };
                }
                return athlete;
            });
        });
    }

    return (
        <div className="AthleteBox">
            <h2>Athletes</h2>
            {gold.map((athlete, index) => (
                <div className="AthleteCard" key={index}>
                    <div className="AthleteInfo">
                        <p>Name: {athlete.name}</p>
                        <p>Gold Medals: {athlete.gold}</p>
                        <button onClick={() => handleClick(index)}>More Gold</button>
                        <button onClick={() => handleClickSub(index)}>Less Gold</button>
                    </div>
                    {/* {info.img && <img src={info.img} alt={info.name} />} */}
                    {athlete.img ? (<img src={athlete.img} alt={athlete.name} />) : (<img src="https://media.istockphoto.com/id/1158723576/de/vektor/running-mann-symbol-zeichen-flach.jpg?s=612x612&w=0&k=20&c=lqQ98SBe-Q3d0L6uoXp9kdiKMcirl46vb-FJskYS6yE=" alt="Default" />
                    )}
                </div>
            ))}
        </div>
    );
};

export default AthleteList;
