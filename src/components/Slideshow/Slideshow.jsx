import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import Carousel from "../Carousel/Carousel";
import Gallery from "../Galery/Gallery";
import SingleImageShow from "../SingleImageShow/SingleImageShow";
import "./slideshow.css";

const Slideshow = ({ photos }) => {

    console.log(photos);
    const [activeImage, setActiveImage] = useState(0)

    const imgs = [
        'https://via.placeholder.com/600/35185e',
        'https://images.unsplash.com/photo-1584226761916-3fd67ab5ac3a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixlib=rb-1.2.1&q=80&w=500',
        'https://images.unsplash.com/photo-1585179292338-45ba1f62f082?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixlib=rb-1.2.1&q=80&w=500',
        'https://images.unsplash.com/photo-1584753987666-ead137ec0614?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixlib=rb-1.2.1&q=80&w=500',
        'https://images.unsplash.com/photo-1584691267914-91c0bee55964?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixlib=rb-1.2.1&q=80&w=500',
        'https://images.unsplash.com/photo-1585084335487-f653d0859c14?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixlib=rb-1.2.1&q=80&w=500',
        'https://images.unsplash.com/photo-1583217874534-581393fd5325?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixlib=rb-1.2.1&q=80&w=500',
    ]

    const slide = [
        1, 2, 3, 4, 5, 6
    ]

    var items = [1, 2]


    return (
        <>
            <SingleImageShow imgs={photos} setActive={setActiveImage} active={activeImage} />
            <Gallery images={photos} active={activeImage} />
        </>
    )
}

export default Slideshow