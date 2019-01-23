import React from 'react';

const DetailView = ({ restaurant }) => {
    // console.log(restaurants);
    return (
        <div className="DetailView">
            {
                // console.log(restaurant)
            }
            <div className="fl w-70-ns vh-100 vh-75-ns pa2 bg-white black-80">
                <div className='tc br3 ma2 bw2'>
                    <h3>test DetailView</h3>
                    <p>{restaurant.id}</p>
                    <p>{restaurant.name}</p>
                </div>
            </div>
        </div>
    );
}

export default DetailView;