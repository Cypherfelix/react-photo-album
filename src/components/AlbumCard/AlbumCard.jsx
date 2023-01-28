import "./albumCard.css";

const AlbumCard = () => {
    return (
        <div className="albumCard">
            <div className="image">
            </div>
            <div className="content">
                <div className="tittle">
                    Album 1
                </div>
                <div className="details">
                    <p>Album Owner: James Mark</p>
                    <p>Email: JamesMark@gmail.com</p>
                    <p>Website: www.jamesMarkPhotos.com</p>
                </div>
                <div className="action">
                    <button>View Album</button>
                </div>
            </div>
        </div>
    )
}

export default AlbumCard