import React from 'react';
import Card from './Card';

const CardList = ({ restaurant }) => {
    return (
        <div>
            <h2>CardList</h2>
            <Card />
            <Card />
            <Card />
        </div>
    );
}

export default CardList;