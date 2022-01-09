import React, {Fragment} from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteCommentPost } from '../../actions/post';
import formatDate from '../../utils/formatDate';

const CommentItem = ({
    postId,
    deleteCommentPost,
    comment: { _id, text, user, name, avatar, date, Comvote, totalvotesCOM },
    auth,
}) => (
        <div className="post-comments">
            <p>
                <span><span className="vote">&#128077; </span>{totalvotesCOM[totalvotesCOM.length-1]}</span>
                <span className="comment">{text}</span>
                <a href="#">u/{name}</a>
                <span> posted on: {formatDate(date)}</span>
                {/* {auth?.user?._id && user == auth.user._id && (
                <span className="postdelete">
                <Link to={`/feed/${_id}`} onClick={e => deleteCommentPost(postId, _id)} className="postdelete">delete</Link> 
                </span>
                )}  */}
            </p>
        </div>
);

CommentItem.propTypes = {
    postId: PropTypes.string.isRequired,
    comment: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
    deleteCommentPost: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth
});

export default connect(mapStateToProps, { deleteCommentPost })(CommentItem);
