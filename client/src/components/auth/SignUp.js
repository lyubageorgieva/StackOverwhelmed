import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setAlert } from '../../actions/alert';
import PropTypes from 'prop-types';


export const SignUp = ({ setAlert }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        passwordConfirm: ''
    });

    const {name, email, password, passwordConfirm} = formData;

    const onChange = e => setFormData({...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();
        if(password !== passwordConfirm) {
            setAlert('Passwords are not matching', 'danger');
        }
        else {
            console.log('SUCCESS');
        }
    }

    

    return (
        <Fragment>
            <div className="form">
                <div  id="signup">
                    <h1 className="account">Sign Up</h1>
                    <form onSubmit={e => onSubmit(e)}>
                        <div className="top-row">
                            <div className="field-wrap">
                                <label>
                                Display Name<span className="req"></span>
                                </label>
                                <input type="text" name="name" value={name} onChange={e => onChange(e)} required autocomplete="off" />
                            </div>
                        </div>
                        <div className="field-wrap">
                            <label>
                                Email Address<span className="req"></span>
                            </label>
                            <input type="email" name="email"  value={email} onChange={e => onChange(e)} required autocomplete="off"/>
                        </div>
                        <div className="field-wrap">
                            <label>
                                Password<span className="req"></span>
                            </label>
                            <input type="password" name="password"  value={password} onChange={e => onChange(e)} required autocomplete="off" minLength="8"/>
                        </div>
                        <div className="field-wrap">
                            <label>
                                Confirm Password<span className="req"></span>
                            </label>
                            <input type="password" name="passwordConfirm"  value={passwordConfirm} onChange={e => onChange(e)} required autocomplete="off" minLength="8"/>
                        </div>
                        <small>By signing up, you agree to our terms of service and privacy policy.</small>
                        <input className="btn" type="submit" value="Sign Up &#8594;" />
                    </form>
                    <h4>Already have an account?    
                        <Link id="linkAuth" to='/login'>  Login</Link>
                    </h4>
                </div>
            </div> 
        </Fragment>
    )
};

SignUp.propTypes = {
    setAlert: PropTypes.func.isRequired
};

export default connect(null, { setAlert })(SignUp);
