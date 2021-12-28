import React,{useState} from 'react';
import PropTypes from 'prop-types';
import { connect }  from 'react-redux';
import { addPost } from '../../actions/post';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';


const PostForm = ({ addPost }) => {
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const history = useHistory();

    return (
        <section className="question-section">
            <form onSubmit={e => {
                e.preventDefault();
                addPost({ title, text});
                setTitle('');
                setText('');
            }}>
                <div className="post-title">
                    <h3>Title</h3>
                    <p>Be specific.</p>
                    <input type="text" className="post-title-details" name="title" maxlength="280" placeholder="What's your question?" value={title} onChange={e => setTitle(e.target.value)} required/>
                </div>
                <div className="post-body">
                    <h3>Body</h3>
                    <p>Include as much information as you can.</p>
                    <textarea name="post-body" id="post-body-details" cols="125" rows="10" value={text} onChange={e => setText(e.target.value)} required></textarea>
                </div>
                <button id="post-form-button" className="submit" type="submit" onClick={() => {history.goBack()}}>Submit Question</button>
                <div>
                <h4 className="have-account">Wanna go back?<Link id="linkAuth" to="/feed">{" "}Q&A</Link></h4>
                </div>
            </form>
            
        </section>
    )
}

PostForm.propTypes = {
    addPost: PropTypes.func.isRequired
}

export default connect(null, { addPost} )(PostForm)
