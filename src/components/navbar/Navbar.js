import { Link } from 'react-router-dom'
import './Navbar.css'
import Logo from './logo.ico'

const Navbar = () => {
    return (
        <div className='navbar'>
            <ul>
                <li className="logo">
                    <img src={Logo} alt="logo"></img>
                    <span> המדריך למאבחן דידקטי</span>
                </li>
                <li>
                    <Link to='/login'> התחבר</Link>
                    <Link to='/signup'> הירשם</Link>
                </li>
                <button className='btn'>התנתק</button>

            </ul>

        </div>
    )
}

export default Navbar;