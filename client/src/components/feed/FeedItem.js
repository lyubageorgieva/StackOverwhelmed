import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import formatDate from '../../utils/formatDate';
import { connect } from 'react-redux';
import { deletePost } from '../../actions/post';




const FeedItem = ({ 
    deletePost,
    auth, 
    post: { _id, user, title, text, name, avatar, upvote, downvote, totalvotes, answer, comment, date },
}) => (
<div className="post-template">
    <div className="post-stats">
        <span className="votes">
            <span className="votes">{totalvotes[totalvotes.length-1]}</span> votes
        </span>
        <span className="answers">
            <Link to={`/feed/${_id}`}>
                <span className="answers">{answer.length} </span>
                answers
            </Link>
        </span>
        
    </div>
    <div className="question-title">
        <Link to={`/feed/${_id}`}>
            {title}
        </Link>
    </div>
    <div className="poster-data">
        <span className="username">u/{name}
        </span>
        <span className="date-posted"> posted on: {formatDate(date)}</span>

        {auth?.user?._id && user == auth.user._id && (
            <span className="postdelete">
            <Link to="/feed" onClick={e => deletePost(_id)} className="postdelete">delete</Link> 
        </span>
        )} 
    </div>
</div>
);


FeedItem.propTypes = {
    post: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
    deletePost: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, {deletePost})(FeedItem)
