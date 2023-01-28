import { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import Header from '../../components/Header/Header'
import Slideshow from '../../components/Slideshow/Slideshow'
import { fetchPhotos } from '../../utils/ApiCalls';
import './album.css'

const Album = () => {
    let { albumId } = useParams();
    const [loading, setLoading] = useState(false);
    const [photos, setPhotos] = useState([])

    useEffect(() => {
        setLoading(true);
        const fetchData = async () => {
            const photos = await fetchPhotos(albumId)
            setPhotos(photos);
            setLoading(false);
        }

        fetchData();
    }, [albumId]);
    return (
        <>
            <Header />
            {loading ? (
                <div className="loader-container">
                    <div className="spinner"></div>
                </div>
            ) : (
                <Slideshow photos={photos} />
            )
            }

        </>
    )
}

export default Album