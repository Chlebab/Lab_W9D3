use bookings
db.dropDatabase()
db.guests.insertMany([
    {
        name: "Bill Billson",
        email: "bb@gmail.com",
        checkedIn: false
    },
    {
        name: "Bob Bobson",
        email: "bobbyb@gmail.com",
        checkedIn: true
    },
    {
        name: "Ben Benson",
        email: "bigbenbenson@gmail.com",
        checkedIn: false
    }
]);