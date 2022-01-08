import React, {Fragment, useEffect} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import PostItem from '../feed/PostItem';
import CommentForm from '../post/CommentForm';
import AnswerForm from '../post/AnswerForm';
import CommentItem from '../post/CommentItem';
import AnswerItem from '../post/AnswerItem';
import { getPost } from '../../actions/post';
import formatDate from '../../utils/formatDate';
import smallLogo from '../../img/smallLogo1.svg';


const Post = ({ getPost, post: { post, loading }, match,}) => {
    useEffect(() => {
        getPost(match.params.id);
    }, [getPost]);

    return loading || post === null ? ( 
        <Spinner/> 
        ) : ( <Fragment>
        <h1 id="h1-post">Wanna go back?<Link id="linkAuth" to="/feed">{" "}Q&A</Link></h1>
        <div className="post-hero">            
            <div className="post-title">
                <p>{post.title}</p>
            </div>
            <div className="poster-data">
                <span className="username">u/{post.name}</span>
                <span className="date-posted">  posted on: {formatDate(post.date)}</span>
            </div>
        </div>
        <section className="post-section">
            <PostItem post={post}/>
            <div className="post-comments"> 
                {post.comment.map(comment => (
                    <CommentItem key={comment._id} comment={comment} postId={post._id} />
                ))}
            </div>
            <CommentForm postId ={post._id}/>
        </section> 

    {post.answer.map(answer => (
        <AnswerItem key={answer._id} answer={answer} postId={post._id} />
    ))}
    
    <AnswerForm postId ={post._id}/>
        </Fragment>
    );
};

Post.propTypes = {
    getPost: PropTypes.func.isRequired,
    post: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    post: state.post
});

export default connect(mapStateToProps, {getPost})(Post);
