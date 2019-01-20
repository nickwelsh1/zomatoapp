import React from 'react';
import Card from './Card';

const CardList = ({ restaurants }) => {
    // console.log(restaurants);
    return (
        <div className="CardList fl w-30-ns vh-75-ns">
            {
                restaurants.map((item, i) => {
                    // console.log(item);
                    const arestaurant = item.restaurant;
                    return (
                        <div className="fl w-100 pa2">
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