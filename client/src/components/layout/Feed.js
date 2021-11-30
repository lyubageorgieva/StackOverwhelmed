import React from 'react'
import { Link } from 'react-router-dom';
import SmallLogo1 from '../../img/smallLogo1.svg';



export const Feed = () => {
    return (
        
    <div>
        <section className="feed-section">
            <div className="container">
                <div className="user-prompt">
                    <p>Here are some questions <span>students</span> have asked!</p>
                </div>
                <div className="posts">
                    <div className="post-template">
                        <div className="post-stats">
                            <span className="votes">
                                    <span className="votes">#</span>
                                    votes
                            </span>
                            <span className="answers">
                                <Link to="/post">
                                        <span className="answers">#</span>
                                        answers
                                </Link>
                            </span>
                        </div>
                        <div className="question-title"><Link to="/post">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias atque rem eveniet amet?</Link></div>
                        <div className="poster-data">
                            <span>u/<Link to="/profile" className="username">so_allan</Link></span>
                            <span className="date-posted">posted on: 17-Nov-2021</span>
                        </div>
                    </div>
                    <div className="post-template">
                        <div className="post-stats">
                            <span className="votes">
                                    <span className="votes">#</span>
                                    votes
                            </span>
                            <span className="answers">
                                <Link to="/post">
                                        <span className="answers">#</span>
                                        answers
                                </Link>
                            </span>
                        </div>
                        <div className="question-title"><Link to="/post">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum laboriosam aut nisi delectus?</Link></div>
                        <div className="poster-data">
                            <span>u/<Link to="/profile" className="username">so_allan</Link></span>
                            <span className="date-posted">posted on: 17-Nov-2021</span>
                        </div>
                    </div>
                    <div className="post-template">
                        <div className="post-stats">
                            <span className="votes">
                                    <span className="votes">#</span>
                                    votes
                            </span>
                            <span className="answers">
                                <Link to="/post">
                                        <span className="answers">#</span>
                                        answers
                                </Link>
                            </span>
                        </div>
                        <div className="question-title"><Link to="/post">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum quaerat explicabo eveniet! Laudantium?</Link></div>
                        <div className="poster-data">
                            <span>u/<Link to="/profile" className="username">so_allan</Link></span>
                            <span className="date-posted">posted on: 17-Nov-2021</span>
                        </div>
                    </div>
                    <div className="post-template">
                        <div className="post-stats">
                            <span className="votes">
                                    <span className="votes">#</span>
                                    votes
                            </span>
                            <span className="answers">
                                <Link to="/post">
                                        <span className="answers">#</span>
                                        answers
                                </Link>
                            </span>
                        </div>
                        <div className="question-title"><Link to="/post">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium consequatur omnis corporis aperiam?</Link></div>
                        <div className="poster-data">
                            <span>u/<Link to="/profile" className="username">so_allan</Link></span>
                            <span className="date-posted">posted on: 17-Nov-2021</span>
                        </div>
                    </div>
                    <div className="post-template">
                        <div className="post-stats">
                            <span className="votes">
                                    <span className="votes">#</span>
                                    votes
                            </span>
                            <span className="answers">
                                <Link to="/post">
                                        <span className="answers">#</span>
                                        answers
                                </Link>
                            </span>
                        </div>
                        <div className="question-title"><Link to="/post">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet voluptatum reiciendis autem suscipit?</Link></div>
                        <div className="poster-data">
                            <span>u/<Link to="/profile" className="username">so_allan</Link></span>
                            <span className="date-posted">posted on: 17-Nov-2021</span>
                        </div>
                    </div>
                    <div className="post-template">
                        <div className="post-stats">
                            <span className="votes">
                                    <span className="votes">#</span>
                                    votes
                            </span>
                            <span className="answers">
                                <Link to="/post">
                                        <span className="answers">#</span>
                                        answers
                                </Link>
                            </span>
                        </div>
                        <div className="question-title"><Link to="/post">Lorem, ipsum dolor sit amet consectetur adipisicing elit. At consectetur laboriosam veniam ab?</Link></div>
                        <div className="poster-data">
                            <span>u/<Link to="/profile" className="username">so_allan</Link></span>
                            <span className="date-posted">posted on: 17-Nov-2021</span>
                        </div>
                    </div>
                    <div className="post-template">
                        <div className="post-stats">
                            <span className="votes">
                                    <span className="votes">#</span>
                                    votes
                            </span>
                            <span className="answers">
                                <Link to="/post">
                                        <span className="answers">#</span>
                                        answers
                                </Link>
                            </span>
                        </div>
                        <div className="question-title"><Link to="/post">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, non. Odit, dolores tenetur?</Link></div>
                        <div className="poster-data">
                            <span>u/<Link to="/profile" className="username">so_allan</Link></span>
                            <span className="date-posted">posted on: 17-Nov-2021</span>
                        </div>
                    </div>
                    <div className="post-template">
                        <div className="post-stats">
                            <span className="votes">
                                    <span className="votes">#</span>
                                    votes
                            </span>
                            <span className="answers">
                                <Link to="/post">
                                        <span className="answers">#</span>
                                        answers
                                </Link>
                            </span>
                        </div>
                        <div className="question-title"><Link to="/post">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores in nobis dignissimos delectus?</Link></div>
                        <div className="poster-data">
                            <span>u/<Link to="/profile" className="username">so_allan</Link></span>
                            <span className="date-posted">posted on: 17-Nov-2021</span>
                        </div>
                    </div>
                </div>
                <div className="user-prompt">
                    <p>What are <span>you</span> waiting for?</p>
                </div>
                <div className="ask-btn">
                    <Link to="/signup">
                        <h2 id="question-cta">Ask A Question</h2>
                        <img src={SmallLogo1} alt="stack overwhelmed icon" className="smallLogo"/>
                    </Link>
                </div>
            </div>
        </section>
    </div>
    )
}

export default Feed;
