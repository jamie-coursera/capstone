import {useState} from 'react';
function handleSubmit(e) {
    e.preventDefault();
}
function BookingForm({availableTimes,dateta:{date,setDate}}) {
    const [time,setTime] = useState({value:null});
    const [guests,setGuests] = useState({value:null});
    const [occasion,setOccasion] = useState({value:'Birthday'});

    return (
    <form onSubmit={handleSubmit}>
        <label htmlFor ="res-date" >Choose date</label>
    <input type="date" id="res-date" value={date.value} onChange={(e) => {setDate({...date,value:e.target.value})}}/>
    <br/>
    <label htmlFor ="res-time">Choose time</label>
    <select id="res-time" value={time.value} onChange={(e) => {setTime({...time,value:e.target.value})}}>
        {availableTimes.map(a => <option>{a}</option>)}
    </select>
    <br/>
    <label htmlFor="guests">Number of guests</label>
    <input type="number" placeholder="1" min="1" max="10" id="guests" value={guests.value} onChange={(e) => {setGuests({...guests,value:e.target.value})}}/>
    <br/>
    <label htmlFor ="occasion">Occasion</label>
    <select id="occasion" value={occasion.value} onChange={(e) => {setOccasion({...occasion,value:e.target.value})}}>
        <option>Birthday</option>
        <option>Anniversary</option>
    </select>
    <input type="submit" value="Make Your reservation"/>
    </form>
    )
}

export default BookingForm