import React from 'react';

const Card = ({count, name, onHandleChange, keyshow}) => { //destructuring to create simple properties
    return (
        <button className='Card   tc w-100 black-80 bg-light-gray pa1'
            name='cardbutton'
            onClick={onHandleChange}
            title={name} >
            <p className=''>{name}</p>
        </button>
    );
}

export default Card;