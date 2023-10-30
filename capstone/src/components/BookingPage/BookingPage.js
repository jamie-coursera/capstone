import BookingForm from './BookingForm.js';
import {useReducer, useState} from 'react'
import './BookingPage.css'
import {fetchAPI} from '../../utils/API.js'
const FontAwesome = require('react-fontawesome')

function updateTimes(state,action) {
    const data = fetchAPI(action);
    if (data) return data
    return updateTimes(action)
}

function initializeTimes() {
    const data = fetchAPI(new Date());
    if (data) return data
    return initializeTimes()

}

function BookingPage() {
    const [date,setDate] = useState(new Date());
    const [availableTimes,dispatch] = useReducer(updateTimes,date,initializeTimes);
    const [completed,setCompleted] = useState(false);
    return (
        <>
        <div id="booktitle">{!completed ?"Reserve a Table" : "Reservation Successful!"}</div>
        {!completed? 
        (<span id="bknform">
            <span id="bknele">
            <BookingForm availableTimes={availableTimes} dispatch={dispatch} setCompleted={setCompleted} dateta={{date,setDate} /*this is an object abbreviation which means {date:date,setDate:setDate}*/}/> 
            </span>
        </span>)
        : (<div id="success">
            <FontAwesome className="fa-solid fa-circle-check" id="fntaws"/>
            <br/>
            You will receive a booking confirmation in your inbox shortly!
            </div>)
        }
        <br/>
        <br/>
        <br/>
        </>
    )
}

export default BookingPage;
export {initializeTimes,updateTimes}