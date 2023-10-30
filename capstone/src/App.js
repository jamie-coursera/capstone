import {Route,Routes} from 'react-router-dom';
import Layout from './utils/Layout';
import Home from './pages/Home'
import Menu from './pages/Menu'
import Reserve from './pages/Reserve'
import Order from './pages/Order'
import Login from './pages/Login'
import About from './pages/About'
import BookingConfirmation from './pages/BookingConfirmation'

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path='/' element = {<Home/>}/>
          <Route path='/about' element = {<About/>}/>
          <Route path='/menu' element = {<Menu/>}/>
          <Route path='/reserve' element = {<Reserve/>}/>
          <Route path='/order' element = {<Order/>}/>
          <Route path='/login' element = {<Login/>}/>
          <Route path='/confirmed' element = {<BookingConfirmation/>}/>
        </Routes>
        </Layout>
    </>
  );
}

export default App;
