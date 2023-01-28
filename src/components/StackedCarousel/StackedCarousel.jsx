import React, { useState, useEffect } from 'react';
import "./stackedCarousel.css"
function StackedCarousel({ slides, slideInterval }) {
    const [activeSlide, setActiveSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveSlide((activeSlide + 1) % slides.length);
        }, slideInterval);
        return () => clearInterval(interval);
    }, [activeSlide, slides.length, slideInterval]);

    return (
        <div className="carousel">
            <div className="slides">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`slide ${index === activeSlide ? 'active' : ''}`}
                    >
                        <div>{slide}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default StackedCarousel;
