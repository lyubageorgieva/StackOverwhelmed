import React, { Fragment } from 'react'
import Logo from '../../img/1.svg';
import Menu from '../../img/menu.png';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../actions/auth';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

export const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
    const authLinks = (
        <nav>
            <Helmet>
              <script src="../../utils/dynamicMenu.js" type="text/javascript" />
            </Helmet>
            <ul id="MenuItems">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/question">Q&A</Link></li>
                <li><Link to="/profile">Profile</Link></li>
                <li>
                    <Link onClick={logout} to='/'>
                    <i className="fas fa-sign-out-alt"/>{' '}
                    <span className="hide-sm">Logout</span>
                    </Link>
                </li>
            </ul>
        </nav>

    );

    const guestLinks = (
        <nav>
            <Helmet>
              <script src="../../utils/dynamicMenu.js" type="text/javascript" />
            </Helmet>
            <ul id="MenuItems">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/question">Q&A</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/signup">Sign Up</Link></li>
            </ul>
        </nav>

    );

    return (
    <div>
        <div className="header">
            <div className="container">
                <div className="navbar">
                    <div className="logo">  
                        <Link to="/"><img src={Logo} alt="Logo" width="300px" /></Link>
                    </div>
                    { !loading && (<Fragment>{ isAuthenticated ? authLinks : guestLinks }</Fragment>) }
                    <img src={Menu} className="menu-icon" alt="menu" onclick="menutoggle()" />
                </div>
            </div>
        </div>
    </div>
    )
}

Navbar.propTypes = {
    logout: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}
const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, { logout })(Navbar);
