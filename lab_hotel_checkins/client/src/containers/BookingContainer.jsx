import BookingList from '../components/BookingList';
import BookingForm from '../components/BookingForm';

const BookingContainer = ({ bookings, addBooking }) => {

    return (  
        <div>
            <BookingForm addBooking={addBooking}/>
            <BookingList bookings={bookings} />
        </div>
    );
}

export default BookingContainer;