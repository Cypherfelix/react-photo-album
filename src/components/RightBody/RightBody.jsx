import { useState } from "react"
import User from "../User/User";
import "./rightBody.css"

const RightBody = ({ users, setNewAlbums, albums }) => {
    const [active, setActive] = useState(-1);
    const handleClick = () => {
        console.log(active);
        // const result = albums.filter(album => album.userId > active);
    }
    return (
        <div className="rightBody">
            <div className="topTittle">
                <p>Filter Albums</p>
            </div>
            <div className="users">
                {users.map((user, index) => {
                    return <User albums={albums} selected={active} setSelected={setActive} key={index} setNewAlbums={setNewAlbums} user={user} />
                })}
            </div>
        </div>
    )
}

export default RightBody