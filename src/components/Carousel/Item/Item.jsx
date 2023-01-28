import React from 'react';
import "./item.scss"

const Item = ({ level, id }) => {
    const className = 'item level' + level;
    return (
        <div className={className}>
            {id}
        </div>
    )
}

export default Item;
