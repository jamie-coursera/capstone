import {Link} from 'react-router-dom'
import './Button.css'
function Button({text,link}) {
    return (

        <span className="outline">
            <span className='button-yellow' aria-label="On Click">
            <Link to={link}>
                {text}
            </Link>
            </span>
        </span>
        

    )
}

export default Button