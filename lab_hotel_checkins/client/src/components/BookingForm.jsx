import {useState} from "react";


const BookingForm = ({addBooking}) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        checkedIn: false,
    })
    const onChange = (e) =>{
        const newFormData = Object.assign({}, formData);
        newFormData[e.target.name] = e.target.value;
        setFormData(newFormData);
    }

    const postBooking = (payload) => {
        return fetch('http://localhost:9000/api/guests/', {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: { 'Content-Type': 'application/json' }
        })
        .then(res => res.json())
    }

    const onSubmit = (e) =>{
        e.preventDefault();
        postBooking(formData).then((data)=>{  //need to do a fetch request
            addBooking(data);
        })

        setFormData({
            name: "",
            email: "",
            checkedIn: false,
        });
    }
    return (
        <form onSubmit={onSubmit} id="bookings-form" >
            <h2>Add a Booking</h2>
            <div className="formWrap">
                <label htmlFor="name">Name:</label>
                <input
                    onChange={onChange}
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name} />
            </div>
            <div className="formWrap">
                <label htmlFor="email">Email:</label>
                <input
                    onChange={onChange}
                    type="text"
                    id="email"
                    name="email"
                    value={formData.email} />
            </div>
            <div className="formWrap">
                <label htmlFor="checkedIn">Checked In:
                    <input
                    type="radio"
                    value="true"
                    name="checkedIn"
                    checked={formData.checkedIn === true}
                    onChange={onChange}
                    />
                    True
                </label>
                <label>
                    <input
                    type="radio"
                    value="false"
                    name="checkedIn"
                    checked={formData.checkedIn === false}
                    onChange={onChange}
                    />
                    False
                </label>
            </div>
            <input type="submit" value="Save" id="save"/>
        </form>
    );
}
export default BookingForm;