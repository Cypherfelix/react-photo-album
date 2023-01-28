export const fetchPhotos = async (album) => {
    const photos = await (await fetch(`https://jsonplaceholder.typicode.com/albums/${album}/photos`)).json();
    return photos
}

export const fetchUsers = async () => {
    const users = await (await fetch("https://jsonplaceholder.typicode.com/users")).json();
    return users;
}

const getUser = ({ users, id }) => {

}

export const fetchAlbums = async () => {
    const users = await fetchUsers();
    const albums = await (await fetch("https://jsonplaceholder.typicode.com/albums")).json();


    let myAlbums = [];
    for (const album of albums) {
        const user = users.find(user => user.id === album.userId);
        const photos = [];
        var thumbnail = `https://via.placeholder.com/150/FFFF00/000000?Text=${album.title}`;
        if (photos.length > 0) {
            thumbnail = photos[0].thumbnailUrl;
        }
        myAlbums.push({ ...album, user: user, thumbnailUrl: thumbnail });
    }
    return myAlbums;
}




export const fetchAllData = () => {

}

