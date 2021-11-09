import React, { Fragment, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth';


export const Login = ({ login, isAuthenticated }) => {
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
        return <Redirect to="/profile" />
    }

    return (
        <Fragment>
            <div className="form">
                <div  id="login">
                    <h1 className="account">Login</h1>
                    <form onSubmit={e => onSubmit(e)}>
                        <div className="field-wrap">
                            <label>
                                Email <span className="req"></span>
                            </label>
                            <input type="email" name="email" value={email} onChange={e => onChange(e)} required autocomplete="off"/>
                        </div>

                        <div className="field-wrap">
                            <label>
                                Password<span className="req"></span>
                            </label>
                            <label>
                                <Link id="forgot" to="/forgot-password">Forgot password?</Link>
                            </label>
                            <input type="password" name="password" value={password} onChange={e => onChange(e)} minLength='8' required autocomplete="off"/>
                        </div>
                       <button className="btn" type="submit">Login &#8594;</button>
                    </form>
                    <h4>
                        Don't have an account? 
                        <Link id="linkAuth" to='/signup'>    Sign Up</Link>
                    </h4>
                </div>
            </div>
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
