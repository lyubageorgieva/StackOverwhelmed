import React, {Fragment, useEffect} from 'react';
import {Link, Redirect} from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteAccount, getCurrentProfile } from '../../actions/profile';
import Spinner from '../layout/Spinner';
import image1 from '../../img/smallLogo1.svg';

const Account = ({getCurrentProfile, deleteAccount, auth: {user}, profile: {profile, loading}}) => {
    useEffect(() => {
        getCurrentProfile();
    }, []);


    return loading && profile === null ? (<Spinner/>) : (<Fragment>
        <section className="profile-section">
        <div className="container">            
            <div className="user-info">
                <div className="user-profile">
                    <img src={user.avatar} alt="profile image" className="user-profile-image"/>
                    <div className="edit-profile-btn">
                        <Link to="/edit-profile">Edit Profile &#8594;</Link> 
                    </div>
                </div>
                <ul className="user-info-table">
                    <ul>
                        <li>Username: {user && user.name}</li>
                        <li>GitHub: {profile && profile.githubname}</li>
                        <li>University: {profile && profile.University}</li>
                        <li>Field: {profile && profile.Field}</li>
                        <li>Bio: {profile && profile.bio}</li>
                    </ul>
                </ul>
            </div>

            <div className="activity">
                <ul className="activity-container">
                    <li className="activity-divider">Questions (3)
                        <ul className="qac-divider">
                            <li className="post-summary">
                                <p>5 votes</p>
                                <a href="post.html">What language is more suitable to write a small script?</a>
                                <p>17-Nov-2021</p>
                            </li>
                            <li className="post-summary">
                                <p>10 votes</p>
                                <a href="post.html">What is the best tool to write code?</a>
                                <p>04-Dec-2021</p>
                            </li>
                            <li className="post-summary">
                                <p>25 votes</p>
                                <a href="post.html">How do I use pointers in C++?</a>
                                <p>12-Oct-2021</p>
                            </li>
                        </ul>
                    </li>
<li className="activity-divider">Answers (3)
                        <ul className="qac-divider">
                            <li className="post-summary">
                                <p>4 votes</p>
                                <a href="post.html">React is a great tool to link the front end with the back end.</a>
                                <p>17-Nov-2021</p>
                            </li>
                            <li className="post-summary">
                                <p>7 votes</p>
                                <a href="post.html">The MERN framework provides a complete set of languages and tools for building a website</a>
                                <p>17-Nov-2021</p>
                            </li>
                            <li className="post-summary">
                                <p>90 votes</p>
                                <a href="post.html">To create classes in C++, you have to create a header file with extension .h and a class file with extension .cpp. The header file should be included in the class file. Once everything is defined, the class file can be imported to the main file.</a>
                                <p>17-Nov-2021</p>
                            </li>
                        </ul>
                    </li>
<li className="activity-divider">Comments (3)
                        <ul className="qac-divider">
                            <li className="post-summary">
                                <p>9 votes</p>
                                <a href="post.html">I agree, Java is easier than C++.</a>
                                <p>17-Nov-2021</p>
                            </li>
                            <li className="post-summary">
                                <p>5 votes</p>
                                <a href="post.html">For me, just running the command "npm i" worked.</a>
                                <p>17-Nov-2021</p>
                            </li>
                            <li className="post-summary">
                                <p>3 votes</p>
                                <a href="post.html">You should be able to see "Hello World" on your screen</a>
                                <p>17-Nov-2021</p>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div>
                <button id="delete-account-button" onClick={() => deleteAccount()} className="signup-btn" type="submit">Delete Account &#8594;</button>
            </div>
        </div>
    </section>

        {profile !== null ? (<Fragment><Redirect to='/account'></Redirect></Fragment>) : (<Fragment></Fragment>)}
    </Fragment>);
}

Account.propTypes = {
    getCurrentProfile: PropTypes.func.isRequired,
    deleteAccount: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    profile: state.profile
});

export default connect(mapStateToProps, {getCurrentProfile, deleteAccount})(Account);