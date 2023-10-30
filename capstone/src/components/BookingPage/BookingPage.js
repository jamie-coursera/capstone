import BookingForm from './BookingForm.js';
import {useReducer, useState} from 'react'
import './BookingPage.css'

function updateTimes(state) {
    return state
}

function initializeTimes() {

    return ['17:00','18:00','19:00','20:00','21:00','22:00']

}
function BookingPage() {
    const [date,setDate] = useState({value:null});
    const [availableTimes,dispatch] = useReducer(updateTimes,date,initializeTimes);

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
export {BookingPage as BookingPage,initializeTimes,updateTimes}