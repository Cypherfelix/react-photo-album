import "./gallery.css"

const Gallery = ({ images, active }) => {
    console.log(active);
    return (
        <div className="wrapper">
            {images.map((img, index) => {
                return <div key={index} className={`box ${active === index ? "active" : ""}`}><img src={img.url} alt={index} /></div>
            })}
        </div>
    )
}

export default Gallery