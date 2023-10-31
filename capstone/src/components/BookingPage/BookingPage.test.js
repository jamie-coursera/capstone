import {render,screen,fireEvent} from "@testing-library/react";
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


test('date valid case', () => {
    render(<BookingPage/>);
    const date = screen.getByLabelText('Date')
    fireEvent.change(date,{target:{value:'2025-12-31'}})
    fireEvent.blur(date)
    expect(screen.queryByTestId("errorMsg")).not.toBeInTheDocument()
    //bad case
})

test('date invalid case', () =>{
    render(<BookingPage/>)
    const date = screen.getByLabelText('Date')
    fireEvent.change(date,{target:{value:'2019-11-25'}})
    fireEvent.blur(date)
    expect(screen.queryByTestId("errorMsg")).toBeInTheDocument()
})


test('time valid case', () => {
    render(<BookingPage/>);
    const time = screen.getByLabelText('Time')
    fireEvent.change(time,{target:{value:'17:00'}})
    fireEvent.blur(time)
    expect(screen.queryByTestId("errorMsg")).not.toBeInTheDocument()
    //bad case
})

test('time invalid case', () => {
    render(<BookingPage/>);
    const time = screen.getByLabelText('Time')
    fireEvent.change(time,{target:{value:'13:17'}})
    fireEvent.blur(time)
    expect(screen.queryByTestId("errorMsg")).toBeInTheDocument()
    //bad case
})

test('guest valid case', () => {
    render(<BookingPage/>);
    const guests = screen.getByLabelText('Number of guests')
    fireEvent.change(guests,{target:{value:1}})
    fireEvent.blur(guests)
    expect(screen.queryByTestId("errorMsg")).not.toBeInTheDocument()
    //bad case
})

test('guest invalid case', () => {
    render(<BookingPage/>);
    const guests = screen.getByLabelText('Number of guests')
    fireEvent.change(guests,{target:{value:17}})
    fireEvent.blur(guests)
    expect(screen.queryByTestId("errorMsg")).toBeInTheDocument()
    //bad case
})


test('occasion valid case', () => {
    render(<BookingPage/>);
    const occasion = screen.getByLabelText('Occasion')
    fireEvent.change(occasion,{target:{value:"Birthday"}})
    fireEvent.blur(occasion)
    expect(screen.queryByTestId("errorMsg")).not.toBeInTheDocument()
    //bad case
})

test('occasion invalid case', () => {
    render(<BookingPage/>);
    const occasion = screen.getByLabelText('Occasion')
    fireEvent.change(occasion,{target:{value:"OtherContent"}})
    fireEvent.blur(occasion)
    expect(screen.queryByTestId("errorMsg")).toBeInTheDocument()
    //bad case
})