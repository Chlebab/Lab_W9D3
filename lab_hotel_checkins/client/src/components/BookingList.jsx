import Booking from './Booking';

const BookingList = ({bookings}) => {

    const bookingsItems = bookings.map((booking) => {
        return <Booking booking={booking} key={booking._id} id={booking._id}/>
    })

    return (  
        <div>
            {bookingsItems}
        </div>
    );
}

export default BookingList