import './Footer.css'
import FooterLogo from '../../assets/footerwhite.png'
function Footer() {
    return (
        <footer className="linkSection">
            <span className="link">
                <img src={FooterLogo} alt='little lemon logo'/>
            </span>
            <span className="link">
                <h2>Navigation</h2>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Menu</li>
                <li>Reservations</li>
                <li>Order Online</li>
                <li>Login</li>
            </ul>
            </span>

            <span className="link">
                <h2>Contact</h2>
            <ul>
                <li>Address</li>
                <li>Landline</li>
                <li>Email</li>
            </ul>
            </span>

            <span className="link">
                <h2>Social Media</h2>
            <ul>
                <li>Twitter / X</li>
                <li>Facebook</li>
                <li>Instagram</li>
            </ul>
            </span>
        </footer>
    )
}
export default Footer;