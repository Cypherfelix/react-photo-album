import "./albumCard.css";
/**
 * 
 * @param {import("../LeftBody/LeftBody").UserData} album 
 * @returns 
 */
const AlbumCard = ({ album }) => {
    const style = {
        background: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
        boxShadow: "0px 10px 20px 0px #e0c6f5",
    }
    return (
        <div className="albumCard" style={style}>
            <div className="image">
                <img src={album.thumbnailUrl} alt={album.title} height={"100%"} />
            </div>
            <div className="content">
                <div className="tittle">
                    {album.title}
                </div>
                <div className="details">
                    <p>Album Owner: {album.user.name}</p>
                    <p>Email: {album.user.email}</p>
                    <p>Website: {album.user.website}</p>
                </div>
                <div className="action">
                    <a href={`/album/${album.id}`}><button>View Album</button></a>
                </div>
            </div>
        </div>
    )
}

export default AlbumCard