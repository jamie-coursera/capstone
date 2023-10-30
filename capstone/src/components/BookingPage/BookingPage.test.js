import {render,screen} from "@testing-library/react";
import BookingPage from './BookingPage'
const {initializeTimes,updateTimes} = require('./BookingPage')

test('Renders the BookingPage Heading', () => {
    render(<BookingPage/>);
    const headerElement = screen.getByText("Reserve a Table")
    expect(headerElement).toBeInTheDocument();
})

test('initializeTimes function', () => {
    expect(initializeTimes()).toStrictEqual(['17:00','18:00','19:00','20:00','21:00','22:00'])
})

test('updateTimes function', () => {
    expect(updateTimes('hello')).toStrictEqual('hello')
})