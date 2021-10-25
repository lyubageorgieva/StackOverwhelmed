import React from 'react'
import Banner from '../../img/banner.png';

export const Header = () => {
    return (
        <div className="header">
            <div className="row">
                <div className="col-2">
                    <h1>Questions Taken <br/>To The Next Level</h1>
                    <p>A local platform building the definitive collection of Student Questions & Answers</p>
                    <a href="/" class="btn">Discover Now &#8594; </a>
                </div>
                <div className="col-2">
                    <img src={ Banner } alt="banner"/>
                </div>
            </div>
        </div>
    )
}

export default Header
