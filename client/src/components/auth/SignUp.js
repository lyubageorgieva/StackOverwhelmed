import React, { Fragment, useState } from 'react';
// import axios from 'axios';


export const SignUp = () => {
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
            console.log('Passwords do not match');
        }
        else {
            console.log('SUCCESS');
            // const newUser = {
            //     name,
            //     email,
            //     password
            // }
            // try {
            //     const config = {
            //         headers: {
            //             'Content-Type': 'application/json'
            //         }
            //     }

            //     const body = JSON.stringify(newUser);

            //     const res = await axios.post('/api/users', body, config);
            //     console.log(res.data);
            // } catch (err) {
            //     console.error(err.response.data);
            // }
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
                        
                    </h4>
                </div>
            </div> 
        </Fragment>
    )
};

export default SignUp;
