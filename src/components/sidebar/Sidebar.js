import './Sidebar.css'
import { NavLink } from 'react-router-dom';
import logo from './assests/logo.ico'
import { MdOutlineAdd } from "react-icons/md";
import { MdSpaceDashboard } from "react-icons/md";

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className='sidebar-content'>
                <div className="user">
                    {/* avate & usuername here later */}
                    <p>שלום סחר</p>

                </div>
                <nav className='links'>
                    <ul>

                        <li>
                            <NavLink exact to='/'>
                                <span>דף ראשי</span>
                                <MdSpaceDashboard />
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to='/create'>
                                <MdOutlineAdd />
                                <span> חדש</span>
                            </NavLink>
                        </li>



                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Sidebar