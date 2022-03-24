


const Albumcard = ({url, albumName, songName, artisName}) => {
    return (

        <div>
            <img src={url}/>
            <p>{albumName}</p>
            <p>{songName}</p>
            <p>{artisName}</p>
            <button>Select</button>
            </div>
);
    }

export default Albumcard;