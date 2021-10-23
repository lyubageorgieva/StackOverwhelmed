import React from 'react'
import Logo from '../../img/1.svg';

export const Footer = () => {
    return (
    //Footer 
    <div className="footer">
        <div className="container">
            <div className="row">
                <div className="footer-col-1">
                    <h3>Download Our App</h3>
                    <p>Download App for Android and iOs mobile phones.</p>
                </div>
                <div className="footer-col-2">
                    <img src={Logo} alt="logo" />
                    <p>For more than 100 years,<br />Stack Overwhelmed's story has always been about innovation</p>
                </div>
                <div className="footer-col-3">
                    <h3>Useful Links</h3>
                    <ul>
                        <li>Moodle</li>
                        <li>myConcordia</li>
                        <li>WebWork</li>
                        <li>COLE Concordia</li>
                        <li>Udemy</li>

                    </ul>
                </div>
                <div className="footer-col-4">
                    <h3>Follow Us</h3>
                    <ul>
                        <li>Facebook</li>
                        <li>Youtube</li>
                        <li>Instagram</li>
                        <li>Snapchat</li>
                        <li>TikTok</li>

                    </ul>
                </div>

            </div>
        </div>
    </div>
    )
}

export default Footer
