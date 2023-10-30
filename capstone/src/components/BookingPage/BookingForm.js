import {useState} from 'react';
import './BookingForm.css'
function handleSubmit(e) {
    e.preventDefault();
}
function BookingForm({availableTimes,dateta:{date,setDate}}) {
    const [time,setTime] = useState({value:null});
    const [guests,setGuests] = useState({value:null});
    const [occasion,setOccasion] = useState({value:'Birthday'});

    return (
    <form id="bookingForm" onSubmit={handleSubmit}>
    <section>
        <label htmlFor ="res-date" >Date</label>
        <input type="date" className="field" id="res-date" value={date.value} onChange={(e) => {setDate({...date,value:e.target.value})}}/>
    </section>
    <section>
        <label htmlFor ="res-time">Time</label>
        <select id="res-time" className="field" value={time.value} onChange={(e) => {setTime({...time,value:e.target.value})}}>
            {availableTimes.map(a => <option>{a}</option>)}
    </select>
    </section>
    
    <section>
    <label htmlFor="guests">Number of guests</label>
    <input type="number" className="field" placeholder="1" min="1" max="10" id="guests" value={guests.value} onChange={(e) => {setGuests({...guests,value:e.target.value})}}/>
    </section>
    <section>
    <label htmlFor ="occasion">Occasion</label>
    <select id="occasion" className="field" value={occasion.value} onChange={(e) => {setOccasion({...occasion,value:e.target.value})}}>
        <option key="birthday">Birthday</option>
        <option key="anniversary">Anniversary</option>
    </select>
    </section>
    <section>
        <input type="submit" id="submitBtn" value="Submit Reservation"/>
    </section>
    </form>
    )
}

export default BookingForm