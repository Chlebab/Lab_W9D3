import React, {useState, useEffect} from 'react';
import BookingContainer from './containers/BookingContainer';



function App() {

  const [bookings, setBookings] = useState([])

  useEffect(() => {
    fetch('http://localhost:9000/api/guests/')
      .then(response => response.json())
      .then((data) => setBookings(data))
  }, []&& bookings) 

  const addBooking = (booking) => {
    setBookings([...bookings, booking])
  }
  

  return (
    <>
    <BookingContainer bookings={bookings} addBooking={addBooking} />
    </>
  )

}

export default App
