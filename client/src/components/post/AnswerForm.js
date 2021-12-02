import React , {useState} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addAnswer } from '../../actions/post';

const AnswerForm = ({ postId, addAnswer }) => {
    const [text, setText] = useState('');
    return (
        <form onSubmit={e => {
            e.preventDefault();
            addAnswer(postId, {text});
            setText('');
        }}
        >
        <section class="your-answer">
            <p>Your Answer</p>
            <textarea name="user-answer" id="user-answer" cols="125" rows="10" value={text} onChange={e => setText(e.target.value)} required>{text}</textarea>
            <button id="post-form-button" class="answer-submit-btn"  type="submit">Answer!</button>
        </section>
        </form>
    )
}

AnswerForm.propTypes = {
    addCommentPost: PropTypes.func.isRequired
}

export default connect(null, {addAnswer})(AnswerForm);