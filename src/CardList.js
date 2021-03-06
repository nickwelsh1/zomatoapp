import React from 'react';
import Card from './Card';

const CardList = ({ restaurants, onHandleButton }) => {
    // console.log(restaurants);
    return (
        <div className="CardList fl w-30-ns vh-75-ns">
            <div className='tc black-80 bg-light-gray pa1 bw2'>
            <p>RESULTS</p>
            </div>
            {
                restaurants.map((item, i) => {
                    // console.log(item);
                    const arestaurant = item.restaurant;
                    return (
                        <div className="fl w-100">
                            <Card
                                key={arestaurant.id.toString()}
                                name={arestaurant.name}
                                onHandleButton={onHandleButton}
                            />
                        </div>
                    )
                })
            }
        </div>
    );
}

export default CardList;