import React, {Fragment, useState, useEffect} from 'react';
import {Link, withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import image1 from '../../img/smallLogo1.svg';
import {createProfile, getCurrentProfile} from '../../actions/profile';

const EditProfile = ({ profile: {profile,loading},createProfile, getCurrentProfile, history}) => {
    const [formData, setFormData] = useState({
        githubname: '',
        University: '',
        Field: '',
        bio: ''
        });

    useEffect(() => {
        getCurrentProfile();
        setFormData({
            githubname: loading || !profile.githubname ? '': profile.githubname,
            University: loading || !profile.University ? '': profile.University,
            Field: loading || !profile.Field ? '': profile.Field,
            bio: loading || !profile.bio ? '': profile.bio
        });
    }, [loading]);

    const {
        githubname,
        University,
        Field,
        bio
    } = formData;

    const onChange = e => setFormData({...formData, [e.target.name]: e.target.value});

    const onSubmit = e => {
        e.preventDefault();
        createProfile(formData, history, true);
    };

    return (<Fragment>
    <section className="profile-editor-section">
        <div  className="container">
            <h1 id="profile-editor-section h1">Edit Profile</h1>
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
                    <button id="registration-button" className="signup-btn" type="submit">Edit Profile &#8594;</button>
                </div>
            </form>
        </div>
    </section>
    </Fragment>);
}

EditProfile.propTypes = {
    createProfile: PropTypes.func.isRequired,
    getCurrentProfile: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    profile: state.profile
});

export default connect(mapStateToProps, {createProfile, getCurrentProfile})(withRouter(EditProfile));