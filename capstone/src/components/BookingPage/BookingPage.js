import BookingForm from './BookingForm.js';
import {useReducer, useState} from 'react'
function BookingPage() {

    function updateTimes(state) {
        return dispatch(state)
    }

    function initlializeTimes() {

        return ['17:00','18:00','19:00','20:00','21:00','22:00']

    }
    
    
    const [date,setDate] = useState({value:null});
    const [availableTimes,dispatch] = useReducer(updateTimes,date,initlializeTimes);
    return (
        <>
        <title>Reserve a Table</title>
        <BookingForm availableTimes={availableTimes} dateta={{date,setDate} /*this is an object abbreviation which means {date:date,setDate:setDate}*/}/> 
        </>
    )
}

export default BookingPage;
