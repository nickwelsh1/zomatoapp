import React from 'react';

const Card = ({count, name, onHandleButton, keyshow}) => { //destructuring to create simple properties
    return (
        <button className='Card   tc w-100 black-80 bg-light-gray pa1'
            name='cardbutton'
            onClick={onHandleButton}
            title={name}
            id={name} >

            <p className=''>{name}</p>
        </button>
    ); // {() => onHandleButton(name)}
}

export default Card;