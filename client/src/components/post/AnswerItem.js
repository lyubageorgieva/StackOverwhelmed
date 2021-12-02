import React, {Fragment} from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const CommentItem = ({
    postId,
    answer: { _id, text, user, avatar, date, Comvote, totalvotesANSW, commentANSW, upvoteANS, downvoteANS, totalvotesANS, supervote},
    auth,
}) => (
        <div className="post-comments">
            <p>
                <span><span className="vote">&#128077; </span>{totalvotesCOM[totalvotesCOM.length-1]}</span>
                <span className="comment">{text}</span>
                <a href="#">u/</a>
            </p>
        </div>
);

CommentItem.propTypes = {
    postId: PropTypes.string.isRequired,
    answer: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth
});

export default connect(mapStateToProps, { })(AnswerItem);
