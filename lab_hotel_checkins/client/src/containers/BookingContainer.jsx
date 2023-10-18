import React, { useState, useEffect } from 'react';
import BookingList from '../components/BookingList';

const BookingContainer = () => {
    return (  
        <div>
            <h1>I am a booking container :></h1>
            <BookingList/>
        </div>
    );
}

export default BookingContainer;