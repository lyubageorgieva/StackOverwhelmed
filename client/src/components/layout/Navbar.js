import React from 'react'
import Logo from '../../img/1.svg';
import Menu from '../../img/menu.png';
import { Link } from 'react-router-dom';

export const Navbar = () => {
    return (
    <div>
        <div className="header">
            <div className="container">

                <div className="navbar">
                    <div className="logo">  
                        <Link to="/"><img src={Logo} alt="Logo" width="300px" /></Link>
                    </div>
                    <nav>
                        <ul id="MenuItems">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/question">Q&A</Link></li>
                            <li><Link to="/login">Login</Link></li>
                            <li><Link to="/signup">Sign Up</Link></li>
                        </ul>
                    </nav>
                    <img src={Menu} className="menu-icon" alt="menu" onclick="menutoggle()" />
                </div>
            </div>
        </div>
    </div>
    )
}

export default Navbar
