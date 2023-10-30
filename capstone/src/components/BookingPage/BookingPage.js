import BookingForm from './BookingForm.js';
import {useReducer, useState} from 'react'
import './BookingPage.css'
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
        <div id="booktitle">Reserve a Table</div>
        <span id="bknform">
            <span id="bknele">
            <BookingForm availableTimes={availableTimes} dateta={{date,setDate} /*this is an object abbreviation which means {date:date,setDate:setDate}*/}/> 
            </span>
        </span>
        <br/>
        <br/>
        <br/>
        </>
    )
}

export default BookingPage;
