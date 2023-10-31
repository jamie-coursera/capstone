import {useState} from 'react';
import './BookingForm.css'
import {submitAPI} from '../../utils/API.js'
function BookingForm({availableTimes,dateta:{date,setDate},setCompleted,dispatch}) {
    function handleSubmit(e) {
        e.preventDefault();
        if (submitAPI(e)) {
        setCompleted(true)
        }
    }
    const [time,setTime] = useState({value:null});
    const [guests,setGuests] = useState({value:1});
    const [occasion,setOccasion] = useState({value:'Birthday'});
    

    return (
        
    <form id="bookingForm" onSubmit={handleSubmit}>
        
    <section>
        <label htmlFor ="res-date" >Date</label>
        <input required type="date" className="field" id="res-date" value={date.value} onChange={(e) => {setDate({...date,value:e.target.value,isTouched:true}); dispatch(new Date(e.target.value))}}/>
        {((date.value==null && date.isTouched) || new Date(date.value).getTime() < Date.now())? <p data-testid="errorMsg" className="errorMsg">Please specify a valid date</p> : null}
    
    </section>
    <section>
        <label htmlFor ="res-time">Time</label>
        <select required id="res-time" className="field" value={time.value} onChange={(e) => {setTime({...time,value:e.target.value,isTouched:true})}}>
            {availableTimes.map(a => <option>{a}</option>)}
    </select>
        {(time.value==null || time.value==="") && time.isTouched ? <p data-testid="errorMsg" className="errorMsg">Please specify an available timeslot</p> : null}
    </section>
    
    <section>
    <label htmlFor="guests">Number of guests</label>
    <input required type="number" className="field"  min="1" max="10" id="guests" value={guests.value} onChange={(e) => {setGuests({...guests,value:e.target.value,isTouched:true})}}/>
    {(((guests.value==null  || guests.value==="" || guests.value>10 || guests.value<1) && guests.isTouched))? <p data-testid="errorMsg" className="errorMsg">Please select a valid number of guests</p> : null}
    </section>
    <section>
    <label htmlFor ="occasion">Occasion</label>
    <select required id="occasion" className="field" value={occasion.value} onChange={(e) => {setOccasion({...occasion,value:e.target.value,isTouched:true})}}>
        <option key="birthday">Birthday</option>
        <option key="anniversary">Anniversary</option>
    </select>
    {((occasion.value==null || occasion.value==="") && occasion.isTouched)? <p data-testid="errorMsg" className="errorMsg">Please select the occasion</p> : null}


    </section>
    <section>
        <input type="submit" aria-label="On Click" id="submitBtn" value="Submit Reservation" disabled={!(time.value==null || date.value==null || new Date(date.value).getUTCMilliseconds() < Date.now() || guests.value==null || occasion.value==null)}/>
    </section>
    </form>
    )
}

export default BookingForm