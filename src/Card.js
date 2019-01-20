import React from 'react';

const Card = ({count, name, keyshow}) => { //destructuring to create simple properties
    return (
        <div className='tc bg-dark-blue br3 pa1 grow bw2 shadow-5'>
            {/* <p>{count}</p> */}
            <p>{name}</p>
            {/* <p>{keyshow}</p> */}
        </div>
    );
}

export default Card;