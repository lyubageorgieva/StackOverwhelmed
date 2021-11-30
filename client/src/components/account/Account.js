import React, {Fragment, useEffect} from 'react';
import {Link, Redirect} from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProfile } from '../../actions/profile';
import Spinner from '../layout/Spinner';
import image1 from '../../img/smallLogo1.svg';

const Account = ({getCurrentProfile, auth: {user}, profile: {profile, loading}}) => {
    useEffect(() => {
        getCurrentProfile();
    }, []);


    return loading && profile === null ? (<Spinner/>) : (<Fragment>
        <section className="profile-section">
        <div className="container">            
            <div className="user-info">
                <div className="user-profile">
                    <img src={image1} alt="profile image" className="user-profile-image"/>
                    <div class="edit-profile-btn">
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
            
            <div className="user-stats">
                <ul>
                    <li>#<br/> reputation</li>
                    <li>#<br/>questions</li>
                    <li>#<br/>answers</li>
                    <li>#<br/>comments</li>
                </ul>
            </div>

            <div className="activity">
                <ul className="activity-container">
                    <li className="activity-divider">Questions (#)
                        <ul className="qac-divider">
                            <li className="post-summary">
                                <p># votes</p>
                                <a href="post.html">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta beatae quia doloribus ut?</a>
                                <p>17-Nov-2021</p>
                            </li>
                            <li className="post-summary">
                                <p># votes</p>
                                <a href="post.html">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, totam unde incidunt praesentium, debitis recusandae asperiores enim nesciunt accusantium voluptas obcaecati nemo consequatur aspernatur?</a>
                                <p>17-Nov-2021</p>
                            </li>
                            <li className="post-summary">
                                <p># votes</p>
                                <a href="post.html">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur, adipisci?</a>
                                <p>17-Nov-2021</p>
                            </li>
                        </ul>
                    </li>
                    <li className="activity-divider">Answers (#)
                        <ul className="qac-divider">
                            <li className="post-summary">
                                <p># votes</p>
                                <a href="post.html">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi totam animi sapiente. Tempore cum iure nobis placeat aperiam incidunt magnam nisi asperiores.</a>
                                <p>17-Nov-2021</p>
                            </li>
                            <li className="post-summary">
                                <p># votes</p>
                                <a href="post.html">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente fugit nam illo, expedita nesciunt fuga.</a>
                                <p>17-Nov-2021</p>
                            </li>
                            <li className="post-summary">
                                <p># votes</p>
                                <a href="post.html">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet necessitatibus perspiciatis dolor modi. Illo repudiandae corrupti, dolor tenetur suscipit ducimus!</a>
                                <p>17-Nov-2021</p>
                            </li>
                        </ul>
                    </li>
                    <li className="activity-divider">Comments (#)
                        <ul className="qac-divider">
                            <li className="post-summary">
                                <p># votes</p>
                                <a href="post.html">Lorem ipsum dolor sit.</a>
                                <p>17-Nov-2021</p>
                            </li>
                            <li className="post-summary">
                                <p># votes</p>
                                <a href="post.html">Lorem ipsum dolor sit amet consectetur adipisicing elit.</a>
                                <p>17-Nov-2021</p>
                            </li>
                            <li className="post-summary">
                                <p># votes</p>
                                <a href="post.html">Lorem ipsum dolor sit amet.</a>
                                <p>17-Nov-2021</p>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </section>

        {profile !== null ? (<Fragment></Fragment>) : (<Fragment><Redirect to='/create-profile'></Redirect></Fragment>)}
    </Fragment>);
}

Account.propTypes = {
    getCurrentProfile: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    profile: state.profile
});

export default connect(mapStateToProps, {getCurrentProfile})(Account);