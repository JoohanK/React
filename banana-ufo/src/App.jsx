import "./App.css";
import "./components/Artist/ArtistCard.css"
import "./components/Artist/ArtistBox.css";
import "./components/Dino/DinoInfoBox.css";
import "./components/List/Athlets/AthleteList.css"
import ArtistBox from "./components/Artist/ArtistBox";
import List from "./components/List/AnimalList";
import DinoInfoBox from "./components/DIno/DinoInfoBox";
import AthleteList from "./components/List/Athlets/AthleteList";

const App = () => {
    const dinoInfo = {
        name: 'Diplodocus',
        discoveryYear: 1878,
        period: 'Jurassic',
        length: '25 meters',
        weight: '13 tons',
        image: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Misty_Diplodocus.jpg'
    }

    const Athlete = [
        { name: "Michael Phelps", gold: 18, img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Michael_Phelps_Rio_Olympics_2016.jpg/640px-Michael_Phelps_Rio_Olympics_2016.jpg" },
        { name: "Jan Ove Waldner", gold: 5 },
        { name: "Lionel Messi", gold: 1 },
    ];

    return (
    <>
    <h1>🍌 Hello World! 🛸</h1>
    <ArtistBox />
    <List animals={["dog", "cow", "horse", "cat", "turtle"]} ordered={true}/>
    <DinoInfoBox info={dinoInfo} imagePosition="right" />
    <AthleteList info={Athlete} />
    </>
    )
}



export default App;