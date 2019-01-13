import React from 'react';
import Card from './Card';

const CardList = ({ restaurants }) => {
    // console.log(restaurants);
    return (
        <div>
            {
                restaurants.map((item, i) => {
                    // console.log(item);
                    const arestaurant = item.restaurant;
                    return (
                        <div className="fl w-third pa2">
                            <Card
                                key={arestaurant.id.toString()}
                                keyshow={arestaurant.id.toString()}
                                count={i+1}
                                name={arestaurant.name}
                            />
                        </div>
                    )
                })
            }
        </div>
    );
}

export default CardList;