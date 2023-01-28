import React, { useState } from 'react';
import { TransitionGroup } from 'react-transition-group';
import Item from './Item/Item';
import "./carousel.scss";

function Carousel({ items, active }) {
    const [carouselItems, setCarouselItems] = useState(items);
    const [carouselActive, setCarouselActive] = useState(active);
    const [direction, setDirection] = useState('');

    function generateItems() {
        var items = []
        var level;
        for (var i = carouselActive - 2; i < carouselActive + 3; i++) {
            var index = i;
            if (i < 0) {
                index = carouselItems.length + i;
            } else if (i >= carouselItems.length) {
                index = i % carouselItems.length;
            }



            level = carouselActive - i;

            if (carouselItems.length <= 3) {
                if (i === carouselActive + 2) {
                    level = (level * -1) - 2;
                }

            }
            items.push(<Item key={index} id={carouselItems[index]} level={level} />);
        }
        return items;
    }

    const moveLeft = () => {
        var newActive = carouselActive;
        newActive--;
        setCarouselActive(newActive < 0 ? carouselItems.length - 1 : newActive);
        setDirection('left');
    }

    const moveRight = () => {
        var newActive = carouselActive;
        setCarouselActive((newActive + 1) % carouselItems.length);
        setDirection('right');
    }

    return (
        <div id="carousel" className="noselect">
            <div className="arrow arrow-left" onClick={moveLeft}><i className="fi-arrow-left">&lt;</i></div>
            {/* {generateItems()} */}
            <TransitionGroup
                transitionName={direction}>
                {generateItems()}
            </TransitionGroup>
            <div className="arrow arrow-right" onClick={moveRight}><i className="fi-arrow-right">&gt;</i></div>
        </div>
    )
}
export default Carousel;
