import React, {Fragment, useState} from 'react';
import { Link, withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import image1 from '../../img/bigLogo.svg';
import image2 from '../../img/smallLogo.svg';
import image3 from '../../img/exit.svg';
import { createProfile } from '../../actions/profile';


const CreateProfile = ({createProfile, history}) => {
    const[formData, setFormData] = useState({
        githubname: '',
        University: '',
        Field: '',
        bio: ''

    });

    const {
        githubname,
        University,
        Field,
        bio
    } = formData;

    const onChange = e => setFormData({...formData, [e.target.name]: e.target.value});

    const onSubmit = e => {
        e.preventDefault();
        createProfile(formData, history);
    }

    return (
    <Fragment>
    <div className="profile-editor-section">
        <h1>Create Profile</h1>
        <div className="user-info">
            <div className="right-col">
                <div className="user-image">
                    <img src={image2} alt="profile image" className="user-profile-image"/>
                    <p>Change image...</p>
                </div>
                <form onSubmit={e => onSubmit(e)}>
                    <div className="top-row">
                        <div className="field-wrap">
                            <label>
                            GitHub Username:<span className="req"></span>
                            </label>
                            <input type="githubname" name="githubname" value={githubname} onChange={e => onChange(e)} required autocomplete="off" />
                        </div>
                    </div>
        
                    <div className="field-wrap">
                        <label>
                            University:<span className="req"></span>
                        </label>
                        <input type="University" name="University" value={University} onChange={e => onChange(e)} required autocomplete="off"/>
                    </div>
        
                    <div className="field-wrap">
                        <label>
                            Field:<span className="req"></span>
                        </label>
                        <input type="Field" name="Field" value={Field} onChange={e => onChange(e)} required autocomplete="off"/>
                    </div>
        
                    <div className="field-wrap">
                            <label>
                                Bio:<span className="req"></span>
                            </label>
                            <textarea name="bio" name="bio" value={bio} onChange={e => onChange(e)} id="bio" cols="30" rows="5"></textarea>
                    </div>
                    <button className="btn" type="submit">Create Profile &#8594;</button>
                </form>
            </div>
        </div>
    </div>
    </Fragment>);
}

CreateProfile.propTypes = {
    createProfile: PropTypes.func.isRequired
}

export default connect(null, {createProfile})(withRouter(CreateProfile));