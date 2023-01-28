import AlbumCard from "../AlbumCard/AlbumCard";
import "./leftBody.css";
export interface UserData {
    userId: number;
    id: number;
    title: string;
    thumbnailUrl: string;
    user: {
        id: number;
        name: string;
        username: string;
        email: string;
        address: {
            street: string;
            suite: string;
            city: string;
            zipcode: string;
            geo: {
                lat: string;
                lng: string;
            }
        },
        phone: string;
        website: string;
        company: {
            name: string;
            catchPhrase: string;
            bs: string;
        }
    }
}
export interface Album {
    albums: UserData[]
}

/**
 * 
 * @param {Album} albums 
 * @returns 
 */
const LeftBody = (albums) => {
    console.log(albums.albums);
    return (
        <div className="leftBody">
            {albums.albums.map((album, index) => {
                return <AlbumCard key={index} album={album} />
            })}
        </div>
    )
}

export default LeftBody