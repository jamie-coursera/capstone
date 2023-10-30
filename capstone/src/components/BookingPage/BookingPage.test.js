import {render,screen} from "@testing-library/react";
import BookingPage from './BookingPage'
const {initializeTimes,updateTimes} = require('./BookingPage')

test('Renders the BookingPage Heading', () => {
    render(<BookingPage/>);
    const headerElement = screen.getByText("Reserve a Table")
    expect(headerElement).toBeInTheDocument();
})

test('initializeTimes function', () => {
    const data = initializeTimes()

    expect(Array.isArray(data)).toBe(true)
    expect(data.length>0).toBe(true)
})

test('updateTimes function', () => {
    const data = updateTimes('something',new Date())

    expect(Array.isArray(data)).toBe(true)
    expect(data.length>0).toBe(true)
})