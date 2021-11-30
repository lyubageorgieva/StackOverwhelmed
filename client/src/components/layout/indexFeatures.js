import React from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from 'prop-types';


import QuestionMark from "../../img/questionMark.svg";
import Check from "../../img/check.svg";
import Happy from "../../img/happy.svg";
import Jmsb from "../../img/jmsb.png";
import Carey from "../../img/Carey_price.jpg";
import Geoff from "../../img/geoff_molson_headshot.jpg";
import Valerie from "../../img/valeriePlante.jpg";
import Intact from "../../img/intact.png";
import Ville from "../../img/villemtl.png";
import Desjardins from "../../img/desjardins.png";
import Saputo from "../../img/saputo.png";

export const indexFeatures = ({isAuthenticated, profile}) => {

    if (isAuthenticated && profile){
        return <Redirect to="/account"/>;
    }

return (
    <div>
        <section className="core-features-section">
            <div className="container">
                <h1>The Core Features</h1>
                <ul className="core-features-list">
                    <li className="cf-1">
                        <img src={QuestionMark} alt="question mark" className="core-features-img"/>
                        <p>Q&A system</p>
                    </li>
                    <li className="cf-2">
                        <img src={Check} alt="check mark" className="core-features-img" />
                        <p>Answer voting</p>
                    </li>
                    <li className="cf-3">
                        <img src={Happy} alt="happy face emoji" className="core-features-img"/>
                        <p>Best answers</p>
                    </li>
                </ul>
            </div>
        </section>
        <section className="statement-section">
            <div className="container">
                <div className="left-col">
                    <h1>Official Q&A <br />For The Community</h1>
                    <p>Thousands of Concordia students around the globe use{" "}<span>Stack Overwhelmed</span> for increased productivity</p>
                </div>
                <img src={Jmsb} className="statement-img" alt="John Molson School of Business and Concordia University logo"/>
            </div>
        </section>
        <section className="testimonials-section">
            <div className="container">
                <h1>Some Testimonials</h1>
                <ul>
                    <li>
                        <img src={Carey} className="testimonials-img" alt="Carey Price" />
                        <blockquote>" Students should help solve the hardest questions, the
                            unknowns, where being familiar with how the problem was built is
                            essential. But we don’t want to keep answering solved problems
                            over and over again. That’s where Stack Overwhelmed really helps."
                        </blockquote>
                        <cite>Carey Price</cite>
                    </li>
                    <li>
                        <img src={Geoff} className="testimonials-img" alt="Geoff Molson"/>
                        <blockquote>
                            " Stack Overwhelmed has been a resource for our entire
                            institution. Not only for students to solve problems, it’s also
                            enabled our professors to answer technical questions that help
                            them close issues. "
                        </blockquote>
                        <cite>Geoff Molson</cite>
                    </li>
                    <li>
                        <img src={Valerie} className="testimonials-img" alt="Valerie Plante"/>
                        <blockquote>
                            " What we love about Stack Overwhelmed is that it’s a very
                            dynamic tool…there’s just so many ways to use this as a liaison
                            between different students and different knowledge bases. "
                        </blockquote>
                        <cite>Valerie Plante</cite>
                    </li>
                </ul>
            </div>
        </section>
        <section className="sponsors-section">
            <div className="container">
                <div>
                    <img src={Intact} alt="Intact insurance logo" />
                </div>
                <div>
                    <img src={Ville} alt="City of Montreal logo" />
                </div>
                <div>
                    <img src={Desjardins} alt="Desjardins bank logo" />
                </div>
                <div>
                    <img src={Saputo} alt="Saputo company logo" />
                </div>
                <div>
                    <img src={Jmsb} alt="John Molson School of Business and Concordia University logo"/>
                </div>
            </div>
        </section>
    </div>
);
};

indexFeatures.propTypes ={
    isAuthenticated: PropTypes.bool
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(indexFeatures);
