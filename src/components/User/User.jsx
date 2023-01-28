
import React from 'react'

const User = ({ user, setSelected, selected, albums, setNewAlbums }) => {
    const handleClick = () => {
        setSelected(user.id);
        const newAlbum = albums.filter(album => album.userId === selected);
        setNewAlbums(newAlbum);
        console.log(newAlbum.length);
        console.log(albums.length);
    }

    return (
        <div className={`${user.id === selected ? "active" : ""} user`} onClick={handleClick}><span>{user.name}</span></div>
    )
}

export default User