import React from 'react';

const Booking = ({booking}) => {


    return (  
        <div>
            <h3>Name: {booking.name} </h3>
            <p>Email: {booking.email} </p>
            <p>Checked In: {booking.checkedIn === "true" ? "True" : "False"} </p>
        </div>
    );
}

export default Booking;