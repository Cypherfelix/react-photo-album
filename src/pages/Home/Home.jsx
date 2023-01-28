import { useEffect, useState } from "react"
import Header from "../../components/Header/Header"
import LeftBody from "../../components/LeftBody/LeftBody"
import RightBody from "../../components/RightBody/RightBody"
import { fetchAlbums, fetchUsers } from "../../utils/ApiCalls"
import "./home.css"

const Home = () => {
    const [albums, setAlbums] = useState([]);
    const [newAlbums, setNewAlbums] = useState([])
    const [users, setUsers] = useState(null)
    const [loading, setLoading] = useState(true);

    console.log("Hello World");

    useEffect(() => {
        setLoading(true);
        const execute = async () => {
            const r = await fetchAlbums();
            const u = await fetchUsers();
            setUsers(u);
            setAlbums(r);
            setNewAlbums(r);
            setLoading(false);
        }
        execute();
    }, []);


    useEffect(() => {
        setLoading(false);
        setLoading(true);
        const execute = async () => {
            const r = await fetchAlbums();
            setAlbums(r);
            setLoading(false);
        }
        if (newAlbums.length !== albums.length) {
            execute();
        }
    }, []);

    return (
        <>
            <Header />
            {loading ? (
                <div className="loader-container">
                    <div className="spinner"></div>
                </div>
            ) : (
                <div className="mainBody">
                    <LeftBody albums={newAlbums} />
                    <RightBody setNewAlbums={setNewAlbums} users={users} albums={albums} />
                </div>
            )
            }
        </>
    )
}

export default Home