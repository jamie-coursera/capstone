import Logo from '../../assets/logo.png'
import './Header.css'
import {useMemo} from 'react'
import {Link,useLocation} from 'react-router-dom'
const pages = [{location:'/',name:'Home'},{location:'/about',name:"About Us"},{location:'/reserve',name:'Reserve'},{location:'/order',name:'Order'},{name:'Login',location:'/login'}]

function Header() {

    const {pathname} = useLocation()
    const navdata = useMemo( () => {
        let arr = []
        for (const page of pages) {
            arr.push(<li><Link to={page.location} style={{fontWeight:pathname===page.location ? 500 : 200}}>{page.name}</Link></li>)
        }
        return arr
    },[pathname])
    

    return (
        <header>
            <div className="navBar">
                <a href="/"> <img src={Logo} alt="Little Lemon's Logo" height="15vh" id="logo"/></a>
                
            <nav>
             <ul>
                {navdata}
            </ul>
            </nav>
            </div>

            </header>
            )
    }
export default Header;
