import React from 'react';
import emptyimage from './images/empty.gif';

const DetailView = ({restaurant}) => {

    console.log('DetailView here: ', restaurant);
    // destructure restaurant and location
    let { id, name, cuisines, thumb, has_online_delivery, has_table_booking } = restaurant.restaurant;
    let { address, locality, city } = restaurant.restaurant.location;

    let longaddress = address + ', ' + locality + ', ' + city;
    console.log('test item name:', longaddress);

    has_table_booking = hasTableBookingToString(has_table_booking);

    has_online_delivery = hasOnlineDeliveryToString(has_online_delivery);

    return (
        <div className="DetailView">
            <div className="fl w-70-ns vh-100 vh-75-ns pa2 bg-white black-80">
                <div className='tc br3 ma2 bw2'>
                    <h3>test DetailView</h3>
                    <h3>{name}</h3>
                    <p>{id}</p>
                    <p>{longaddress}</p>
                    <p>{has_table_booking}</p>
                    <p>{has_online_delivery}</p>
                    <p>{cuisines}</p>
                    {/* need a restaurant API request to get phone */}
                    {/* opening hours not in initial API response */}
                    <img src={thumb || emptyimage} alt={name} />
                </div>
            </div>
        </div>
    );  //

}

export default DetailView;

function hasOnlineDeliveryToString(has_online_delivery) {
    if (has_online_delivery === 0) {
        has_online_delivery = 'Delivery not available';
    }
    else {
        has_online_delivery = 'Delivery available';
    }
    return has_online_delivery;
}

function hasTableBookingToString(has_table_booking) {
    if (has_table_booking === 0) {
        has_table_booking = 'No bookings';
    }
    else {
        has_table_booking = 'Has table bookings';
    }
    return has_table_booking;
}
