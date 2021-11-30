import React, {Fragment, useState} from 'react';
import {Link, withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {createProfile} from '../../actions/profile';

const CreateProfile = ({createProfile, history}) => {
    const [formData, setFormData] = useState({
        githubname: '',
        University: '',
        Field: '',
        bio: ''
        });


    const {
        githubname,
        University,
        Field,
        bio,
    } = formData;

    const onChange = e => setFormData({...formData, [e.target.name]: e.target.value});

    const onSubmit = e => {
        e.preventDefault();
        createProfile(formData, history);
    };

    return (<Fragment>
    <section className="profile-editor-section">
        <div  className="container">
            <h1 id="profile-editor-section h1">Create Profile</h1>
            <form className="form" onSubmit={e => onSubmit(e)}>
                <div className="right-col">
                    <div className="top-row">
                        <div className="field-wrap">
                            <label>
                                Github Username:<span className="req"></span>
                            </label>
                            <input type="text" name="githubname" value={githubname} onChange={e => onChange(e)} required autocomplete="off" />
                        </div>
                    </div>

                    <div className="field-wrap">
                        <label>
                            University:<span className="req"></span>
                        </label>
                        <input type="text" name="University" value={University} onChange={e => onChange(e)} required autocomplete="off" />
                    </div>

                    <div className="field-wrap">
                        <label>
                            Field:<span className="req"></span>
                        </label>
                        <input type="text" name="Field"value={Field} onChange={e => onChange(e)} required autocomplete="off" />
                    </div>

                    <div className="field-wrap">
                        <label>
                            Bio:<span className="req"></span>
                        </label>
                        <textarea name="bio" id="bio" cols="30" rows="5" value={bio} onChange={e => onChange(e)}></textarea>
                    </div>
                    <button id="registration-button" className="signup-btn" type="submit">Create Profile &#8594;</button>
                </div>
            </form>
        </div>
    </section>
    </Fragment>);
}

CreateProfile.propTypes = {
    createProfile: PropTypes.func.isRequired
};


export default connect(null, {createProfile})(withRouter(CreateProfile));