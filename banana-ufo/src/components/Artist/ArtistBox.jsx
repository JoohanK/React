import Artist from "./ArtistCard";
import kebab from "../../../data.json";

const ArtistBox = () => {
    const data = kebab.data;

    return (
        <>
        <div className="artist-container">
        <h2>Artist Box</h2>
        {data.map((artistData)=>{
            return <Artist name={artistData.name} albums={artistData.albums} tophit={artistData.tophit} photo={artistData.photo} />
        })}
        </div>
        </>
    );
}

export default ArtistBox;

