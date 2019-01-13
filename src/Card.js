import React from 'react';

const Card = ({count, name, keyshow}) => { //destructuring to create simple properties
    return (
        <div>
            <p>{count}</p>
            <p>{name}</p>
            <p>{keyshow}</p>
        </div>
    );
}

export default Card;