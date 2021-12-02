import React, { Fragment, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth';


export const Login = ({ login, isAuthenticated, profile }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const {email, password} = formData;

    const onChange = e => setFormData({...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();
        login(email, password);
    }

    // Redirection if the user is logged in
    if(isAuthenticated) {
        return <Redirect to="/account"/>
    }

    return (
        <Fragment>
            <section className="login-section">
                <div  className="container">
                    <h1 id="h1-registration">Login</h1>
	                <form onSubmit={e => onSubmit(e)}>
                        <div className="right-col">
                            <div className="field-wrap">
                                <label>
                                    Email Address<span className="req"></span>
                                </label>
                                <input type="email" name="email" value={email} onChange={e => onChange(e)} required autocomplete="off"/>
                            </div>
                            <div className="field-wrap">
                                <label>
                                    Password<span className="req"></span>
                                </label>
                                <input type="password" name="password" value={password} onChange={e => onChange(e)} minLength='8' required autocomplete="off"/>
                            </div>
                            <button id="registration-button" className="signup-btn" type="submit">Login &#8594;</button>
                            <h4 className="have-account">Don't have an account?<Link id="linkAuth" to="/signup">{" "}Sign Up</Link></h4>
                        </div>
                    </form>
                </div>
            </section> 
        </Fragment>
    );
}

Login.propTypes = {
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login })(Login);
