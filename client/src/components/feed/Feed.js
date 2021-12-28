import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import FeedItem from './FeedItem';
import PostForm from './PostForm';
import { getFeed } from '../../actions/post';
import SmallLogo1 from '../../img/smallLogo1.svg';

const Feed = ({ getFeed, post: { posts, loading } }) => {
    useEffect(() =>  {
        getFeed();
    }, [getFeed]);
    return loading ? ( 
    <Spinner /> 
    ) : ( 
    <Fragment>
        <section className="feed-section">
                <div className="user-prompt">
                    <p>Welcome to the <span>Q&A</span>!</p>
                </div>
                <div className="posts">
                    {(posts || []).map(post => (
                        <FeedItem key={post._id} post={post} />
                    ))}
                </div>
                <div className="user-prompt">
                    <p>What are <span>you</span> waiting for?</p>
                </div>
                <div className="ask-btn">
                    <Link to="/create-post">
                        <h2 id="question-cta">Ask A Question</h2>
                        <img src={SmallLogo1} alt="stack overwhelmed icon" className="smallLogo"/>
                    </Link>
                </div>
        </section>
    </Fragment>
    );
};

Feed.propTypes = {
    getFeed: PropTypes.func.isRequired,
    post: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    post: state.post
});

export default connect(mapStateToProps, { getFeed })(Feed);
