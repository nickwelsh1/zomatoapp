import React from 'react';

const DetailView = ({ restaurant }) => {
    // console.log(restaurants);
    return (
        <div className="DetailView">
            {
                console.log(restaurant)
            }
            <div className="">
                <div className='tc br3 ma2 bw2'>
                    <p>test DetailView</p>
                    {/* <p>{restaurant.id}</p>
                    <p>{restaurant.name}</p> */}
                </div>
            </div>
        </div>
    );
}

export default DetailView;