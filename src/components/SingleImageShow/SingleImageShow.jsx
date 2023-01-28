import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchPhotos } from "../../utils/ApiCalls";
import "./singleImageShow.css"

const SingleImageShow = ({ imgs, setActive, active }) => {
    let { albumId } = useParams();
    console.log(albumId);
    const [loading, setLoading] = useState(false);
    const [photos, setPhotos] = useState([])

    useEffect(() => {
        setLoading(true);
        const fetchData = async () => {
            const photos = await fetchPhotos(albumId)
            setPhotos(photos);
            setLoading(false);
        }
        if (photos.length <= 0) {
            fetchData();
        }
    }, [albumId, photos]);

    console.log(imgs);
    const [carouselActive, setCarouselActive] = useState(active)


    const moveLeft = () => {
        var newActive = carouselActive;
        newActive--;
        setCarouselActive(newActive < 0 ? imgs.length - 1 : newActive);
        console.log(carouselActive);
        setActive(carouselActive);

    }

    const moveRight = () => {
        var newActive = carouselActive;
        setCarouselActive((newActive + 1) >= imgs.length ? 0 : newActive + 1);
        console.log(carouselActive);
        setActive(carouselActive);
    }


    return (
        <>
            <div className="titleHead">
                {imgs[active]?.title}
            </div>
            <div className="slideshow">
                <img className="mainImg" src={imgs[active]?.url} alt="im" />
                <div className="actions">
                    <button onClick={moveLeft}>&lt;</button>
                    <button onClick={moveRight}>&gt;</button>
                </div>

            </div>
        </>

    )
}

export default SingleImageShow