import React, {Fragment} from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteCommentAnswer } from '../../actions/post';
import formatDate from '../../utils/formatDate';

const CommentAnswerItem = ({
    postId,
    answerId,
    deleteCommentAnswer,
    commentANSW: { _id, text, user, name, avatar, date, comANSWvote, totalvotescomANSW },
    auth,
}) => (
        <div className="answer-comments">
            <p>
                <span><span className="vote">&#128077; </span>{totalvotescomANSW[totalvotescomANSW.length-1]}</span>
                    <span className="comment">{text}</span>
                    <a href="profile.html">u/{name}</a>
                    <span className="date-posted-answ"> posted on: {formatDate(date)}</span>
                {/* {auth?.user?._id && user == auth.user._id && (
                <span className="postdelete">
                <Link to={`/feed/${_id}`} onClick={e => deleteCommentPost(_id)} className="postdelete">delete</Link> 
                </span>
                )}  */}
            </p>
        </div>
);

CommentAnswerItem.propTypes = {
    postId: PropTypes.string.isRequired,
    answerId: PropTypes.string.isRequired,
    commentANSW: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
    deleteCommentAnswer: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth
});

export default connect(mapStateToProps, { deleteCommentAnswer })(CommentAnswerItem);
