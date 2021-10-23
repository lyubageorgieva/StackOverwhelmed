import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';


export const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const {email, password} = formData;

    const onChange = e => setFormData({...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();
        console.log('SUCCESS'); 
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
                            {/* <label className="forgot">
                                <a href="" style="color:blue "/>Forgot password?
                            </label> */}
                            <input type="password" name="password" value={password} onChange={e => onChange(e)} minLength='8' required autocomplete="off"/>
                        </div>
                        <input className="btn" type="submit" value="Login &#8594;" />
                    </form>
                    <h4>
                        Don't have an account? 
                        {/* <Link to='/signup' style='color: #ffb085'>Sign Up</Link> */}
                    </h4>
                </div>
            </div> 
        </Fragment>
     );
}

export default Login;
