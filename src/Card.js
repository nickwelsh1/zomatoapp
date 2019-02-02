import React from 'react';

const Card = ({name, onHandleButton}) => { //destructuring to create simple properties
    return (
        <button className='Card   tc w-100 black-80 bg-light-gray pa3'
            name='cardbutton'
            onClick={onHandleButton}
            id={name} >
            {name}
        </button>
    );
}

export default Card;