import React from 'react'
import Logo from '../../img/1.svg';
import Menu from '../../img/menu.png';
import navImg from '../../img/—Pngtree—hand-painted business handshake png free_4424701.png';

export const Navbar = () => {
    return (
    <div>
        <div className="header">
            <div className="container">

                <div className="navbar">
                    <div className="logo">  
                        <a href="index.html"><img src={Logo} alt="Logo" width="300px" /></a>
                    </div>
                    <nav>
                        <ul id="MenuItems">
                            <li><a href="index.html">Home</a></li>
                            <li><a href="question.html">Q&A</a></li>
                            <li><a href="login.html">Login</a></li>
                            <li><a href="signUp.html">Sign Up</a></li>
                        </ul>
                    </nav>
                    <img src={Menu} className="menu-icon" onclick="menutoggle()" />
                </div>
                <div className="row">
                    <div className="col-2">
                        <h1>Questions Taken <br />To The Next Level</h1>
                        <p>A local platform building the definitive collection of Student Questions & Answers</p>
                        <a href="" className="btn">Discover Now &#8594; </a>
                    </div>
                    <div className="col-2">
                        <img src={navImg} alt="Navbar Image" />
                    </div>
                </div>

            </div>
        </div>
    </div>
    )
}

export default Navbar
