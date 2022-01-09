import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import smallLogo from '../../img/smallLogo1.svg';
import CommentAnswerItem from '../post/CommentAnswerItem';
import CommentAnswerForm from '../post/CommentAnswerForm';
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
                    u/<span>{name}</span>
                </a>
                <span className="date-posted-answ"> posted on: {formatDate(date)}</span>
            </div>

            <div className="answer-comments">
                {commentANSW.map(commentANSW => (
                    <CommentAnswerItem key={commentANSW._id} commentANSW={commentANSW} postId={postId} answerId={_id} />
                ))}
            </div>

            <div className="add-comment">
                <CommentAnswerForm postId={postId} answerId={_id}/>
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
