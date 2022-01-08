import React , {useState} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addCommentAnswer } from '../../actions/post';

const CommentAnswerForm = ({ postId, answerId, addCommentAnswer }) => {
    const [text, setText] = useState('');
    
    function refreshPage() {
    window.location.reload(false);
    }
    return (
        <form onSubmit={e => {
            e.preventDefault();
            addCommentAnswer(postId, answerId, {text});
            setText('');
        }}
        >
        <div className="add-comment">
            <p className="comment-prompt">Add a comment...</p>
            <div className="comment-form">
                <textarea name="comment" className="comment-form-details" cols="125" rows="2" value={text} onChange={e => setText(e.target.value)} required></textarea>
                <button id="post-form-button" className="comment-submit-btn" type="submit" onClick={refreshPage} >Comment!</button>
            </div>
        </div>
        </form>
    )
}

CommentAnswerForm.propTypes = {
    addCommentAnswer: PropTypes.func.isRequired
}

export default connect(null, {addCommentAnswer})(CommentAnswerForm);
