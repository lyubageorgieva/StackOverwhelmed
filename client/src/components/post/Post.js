import React, {Fragment, useEffect} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import PostItem from '../feed/PostItem';
import CommentForm from '../post/CommentForm';
import AnswerForm from '../post/AnswerForm';
import CommentItem from '../post/CommentItem';
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
            {/* <div className='comments'> 
                {post.comments.map(comment => (
                    <CommentItem key={comment._id} comment={comment} postId={post._id} />
                ))}
            </div> */}
            <CommentForm postId ={post._id}/>
        </section> 

        <section className="answer-section">
        <div className="answer">
            <div className="answer-data">
                <div className="answer-stats">
                    <div className="up">&#128077;</div>
                    <div className="votes">#</div>
                    <div className="down">&#128078;</div>
                    <div className="supervote">&#9734;</div>
                </div>
                <div className="answer-body">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque obcaecati nemo, voluptatem animi culpa maiores vero impedit voluptate voluptatibus ab eligendi iusto! Sit itaque, tenetur possimus suscipit eaque vero quidem cupiditate sunt eligendi ea temporibus. Recusandae deleniti distinctio cupiditate consequatur doloremque optio numquam at pariatur eos saepe, dignissimos cum, assumenda quos velit! Hic voluptas illo dolor omnis molestiae error dolore dolorem voluptatum nisi, delectus ut iste beatae quos eos sequi explicabo recusandae voluptatem cum in tenetur soluta architecto praesentium quod? Impedit sed iure, eveniet facilis similique aperiam voluptas at quibusdam sapiente recusandae maiores cum asperiores eligendi delectus autem neque veritatis!</p>
                </div>
            </div>
            <div className="poster">
                <a href="profile.html" className="username">
                    <img src={smallLogo} atl="user profile picture" className="user-profile-picture"/>
                    u/<span>so_kenny</span>
                </a>
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
        <div className="answer">
            <div className="answer-data">
                <div className="answer-stats">
                    <div className="up">&#128077;</div>
                    <div className="votes">#</div>
                    <div className="down">&#128078;</div>
                    <div className="supervote">&#9733;</div>
                </div>
                <div className="answer-body">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque obcaecati nemo, voluptatem animi culpa maiores vero impedit voluptate voluptatibus ab eligendi iusto! Sit itaque, tenetur possimus suscipit eaque vero quidem cupiditate sunt eligendi ea temporibus. Recusandae deleniti distinctio cupiditate consequatur doloremque optio numquam at pariatur eos saepe, dignissimos cum, assumenda quos velit! Hic voluptas illo dolor omnis molestiae error dolore dolorem voluptatum nisi, delectus ut iste beatae quos eos sequi explicabo recusandae voluptatem cum in tenetur soluta architecto praesentium quod? Impedit sed iure, eveniet facilis similique aperiam voluptas at quibusdam sapiente recusandae maiores cum asperiores eligendi delectus autem neque veritatis!</p>
                </div>
            </div>
            <div className="poster">
                <a href="profile.html" className="username">
                    <img src={smallLogo} atl="user profile picture" className="user-profile-picture"/>
                    u/<span>so_nicholas</span>
                </a>
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
        <div className="answer">
            <div className="answer-data">
                <div className="answer-stats">
                    <div className="up">&#128077;</div>
                    <div className="votes">#</div>
                    <div className="down">&#128078;</div>
                    <div className="supervote">&#9734;</div>
                </div>
                <div className="answer-body">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque obcaecati nemo, voluptatem animi culpa maiores vero impedit voluptate voluptatibus ab eligendi iusto! Sit itaque, tenetur possimus suscipit eaque vero quidem cupiditate sunt eligendi ea temporibus. Recusandae deleniti distinctio cupiditate consequatur doloremque optio numquam at pariatur eos saepe, dignissimos cum, assumenda quos velit! Hic voluptas illo dolor omnis molestiae error dolore dolorem voluptatum nisi, delectus ut iste beatae quos eos sequi explicabo recusandae voluptatem cum in tenetur soluta architecto praesentium quod? Impedit sed iure, eveniet facilis similique aperiam voluptas at quibusdam sapiente recusandae maiores cum asperiores eligendi delectus autem neque veritatis!</p>
                </div>
            </div>
            <div className="poster">
                <a href="profile.html" className="username">
                    <img src={smallLogo} atl="user profile picture" className="user-profile-picture"/>
                    u/<span>so_shawn</span>
                </a>
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
