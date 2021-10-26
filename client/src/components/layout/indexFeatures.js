import React from 'react'
import { Link } from 'react-router-dom';
import image1 from '../../img/questionMarkPattern.png';
import image2 from '../../img/transparentCheckMark.png';
import image3 from '../../img/smileyFace.png';
import image4 from '../../img/jmsb.png';
import image5 from '../../img/Carey_price.jpg';
import image6 from '../../img/geoff_molson_headshot.jpg';
import image7 from '../../img/valeriePlante.jpg';
import image8 from '../../img/intact.png';
import image9 from '../../img/villemtl.png';
import image10 from '../../img/desjardins.png';
import image11 from '../../img/saputo.png';

export const indexFeatures = () => {
    return (
        <div>     
            {/* <!-- Core Features --> */}
            <div className="features">
                <div className="small-container">
                    <h1 className="row">The Core Features</h1>
                    <div className="row">
                        <div className="col-3">
                            <img src={image1} alt="Core Features 1"/>
                            <h3>Q&A<br/>System</h3>
                        </div>
                        <div className="col-3">
                            <img src={image2} alt="Core Feature 2"/>
                            <h3>Answer<br/>Voting</h3>
                        </div>
                        <div className="col-3">
                            <img src={image3} alt="Core Feature 3"/>
                            <h3>Best<br/>Answers</h3>
                        </div>
                    </div>
                </div>
                {/* <!--  More description --> */}
                <div className="header">
                    <div className="container">
                        <div className="row">
                            <div className="col-2">
                                <h1>Official Q&A <br/>For The Community</h1>
                                <p>Thousands of Concordia Students around the globe <br/> use Stack Overwhelmed for increased productivity</p>
                                <Link to="/signup" className="btn">Sign Up &#8594; </Link>
                            </div>
                            <div className="col-2">
                                <img src={image4} alt="JMSB"/>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Testimonials --> */}
            <div className="testimonial">
                <div className="small-container">
                    <h1 className="row">Some Testimonials</h1>
                    <div className="row">
                        <div className="col-3">
                            <p>" Students should help solve the hardest questions, the unknowns, where being familiar with how the problem was built is essential. But we don’t want to keep answering solved problems over and over again. That’s where Stack Overwhelmed
                                really helps."</p>
                            <img src={image5} alt="Carey Price"/>
                            <h3>Carey Price</h3>
                        </div>
                        <div className="col-3">
                            <p>
                                " Stack Overwhelmed has been a resource for our entire institution. Not only for students to solve problems, it’s also enabled our professors to answer technical questions that help them close issues. "
                            </p>
                            <img src={image6} alt="Geoff Molson"/>
                            <h3>Geoff Molson</h3>
                        </div>
                        <div className="col-3">
                            <p>" What we love about Stack Overwhelmed is that it’s a very dynamic tool…there’s just so many ways to use this as a liaison between different students and different knowledge bases. "</p>
                            <img src={image7} alt="Valerie Plante"/>
                            <h3>Valerie Plante</h3>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- brands/sponsors --> */}

            <div className="brands">
                <div className="small-container">
                    <div className="row">
                        <div className="col-5">
                            <img src={image8} alt="Intact"/>
                        </div>
                        <div className="col-5">
                            <img src={image9} alt="Ville MTL"/>
                        </div>
                        <div className="col-5">
                            <img src={image10} alt="Desjardins"/>
                        </div>
                        <div className="col-5">
                            <img src={image11} alt="Saputo"/>
                        </div>
                        <div className="col-5">
                            <img src={image4} alt="JMSB"/>
                        </div>
                    </div>
                </div>
            </div>     
        </div>
    )
}

export default indexFeatures;
