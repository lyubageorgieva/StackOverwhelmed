import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import formatDate from '../../utils/formatDate';
import { connect } from 'react-redux';
import smallLogo from '../../img/smallLogo1.svg';
import { addVote, removeVote } from '../../actions/post';


const PostItem = ({
    addVote,
    removeVote,
    auth, 
    post: { _id, user, title, text, name, avatar, upvote, downvote, totalvotes, answer, comment, date }}

    ) => (
    <div>
            <div className="post-data">
                <div className="post-stats">
                    <div onClick={e => addVote(_id)} className="up">&#128077;</div>
                    <div className="votes">{totalvotes[totalvotes.length-1]}</div>
                    <div onClick={e => removeVote(_id)} className="down">&#128078;</div>
                </div>
                <div className="post-body">
                    <p>{text}</p>
                </div>
            </div>
            <div className="poster">
                <a href="/" className="username">
                    <img src={smallLogo} atl="user profile picture" className="user-profile-picture"/>
                    u/<span>{name}</span>
                </a>
            </div>
    </div>
);


PostItem.propTypes = {
    post: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, {addVote, removeVote})(PostItem)
