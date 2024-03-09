

const Artist = ({name, albums, tophit, photo}) => {
    return (<>
    <div className="artist-card">
        
    <p className="artist-info"><span className="artist-rubrik">ARTIST</span> <br />
    Name: {name}, <br /> 
    Albums: {albums}, <br />
    Top-hit: {tophit}, <br />
    </p>
   
    
    <img src={photo} alt={name} />
    
    </div>
    </>)
}

export default Artist;