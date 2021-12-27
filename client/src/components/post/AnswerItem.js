import React, {Fragment} from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import smallLogo from '../../img/smallLogo1.svg';
import CommentItem from '../post/CommentItem';
import CommentForm from '../post/CommentForm';
import formatDate from '../../utils/formatDate';

const AnswerItem = ({
    postId,
    answer: { _id, text, user, name, avatar, date, Comvote, totalvotesANSW, commentANSW, upvoteANS, downvoteANS, totalvotesANS, supervote},
    auth,
}) => (
    <section className="answer-section">
        <div className="answer">
            <div className="answer-data">
                <div className="answer-stats">
                    <div className="up">&#128077;</div>
                    <div className="votes">{totalvotesANSW[totalvotesANSW.length-1]}</div>
                    <div className="down">&#128078;</div>
                    <div className="supervote">&#9734;</div>
                </div>
                <div className="answer-body">
                    <p className="answer-text">{text}</p>
                </div>
            </div>
            <div className="poster">
                <a href="#!" className="username">
                    <img src={smallLogo} atl="user profile picture" className="user-profile-picture"/>
                    u/<span>so_{name}</span>
                </a>
                <span className="date-posted-answ"> posted on: {formatDate(date)}</span>
            </div>
            <div className="answer-comments">
                <p>
                    <span><span className="vote">&#128077; </span>#</span>
                    <span className="comment">Lorem ipsum dolor sit amet.</span>
                    <a href="profile.html">u/so_argiro</a>
                </p>
                <p>
                    <span><span className="vote">&#128077; </span>#</span>
                    <span className="comment">Lorem ipsum dolor sit amet consectetur adipisicing.</span>
                    <a href="profile.html">u/so_lyuba</a>
                </p>
                <p>
                    <span><span className="vote">&#128077; </span>#</span>
                    <span className="comment">Lorem ipsum dolor sit.</span>
                    <a href="profile.html">u/so_rudy</a>
                </p>
            </div>
            <div className="add-comment">
                <p className="comment-prompt">Add a comment...</p>
                <div className="comment-form">
                    <textarea name="comment" className="comment-form-details" cols="125" rows="2"></textarea>
                    <p className="comment-submit-btn">Comment!</p>
                </div>
            </div>
        </div>
    </section>
);

AnswerItem.propTypes = {
    postId: PropTypes.string.isRequired,
    answer: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth
});

export default connect(mapStateToProps, { })(AnswerItem);
