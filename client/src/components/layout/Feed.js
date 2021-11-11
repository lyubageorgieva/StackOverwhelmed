import React from 'react'
import { Link } from 'react-router-dom';
import Logo2 from '../../img/logo.png';
import {Helmet} from "react-helmet";


export const Feed = () => {
    return (
        
    
        <div className="application">
            {/* Feed  */}
            <Helmet>
              <script src="../../utils/tags.js" type="text/javascript" />
            </Helmet>
            <div id="Feed">
                <Link to="/question"><h3 className="row post-question">Ask A Question</h3></Link>
                <div className="row">
                    <p></p>
                    <form action="/action_page.php">
                        <label for="sort">sort by:</label>
                        <select id="sorting" name="sorting">
                        <option value="new">New</option>
                        <option value="hot">Hot</option>
                        <option value="best">Best</option>
                        </select>
                    </form>
                </div>
                <div className="row q1">
                    <div className="col_left">
                        <br/>
                        <div class="votes">
                            <div>
                                <p class="thumb">&#128077;</p>
                                <p class="upvote">1</p>
                            </div>
                            <div>
                                <p class="thumb">&#128078;</p>
                                <p class="downvote">-1</p>
                            </div>
                        </div>
                        <br/>
                        <p className="answer-button">25<br/>answers</p>
                        <br/>
                        <p>1.5k views</p>
                    </div>
                    <div className="col_right">
                        
                        <a href="#!" className="question">Why is processing a sorted array faster than processing an unsorted array?</a>
                        
                        <p className="description">An additional thing I will need to do is hide the right column based on user interaction, in which case the left column would still keep its fixed width, but the center column would fill the rest of the space. An additional thing I will need to do is hide the right column based on user interaction, in which case the left column would still keep its fixed width, but the center column would fill the rest of the space.</p>

                        <div className="row user">
                            <img src={Logo2} className="col_left user_pf" alt="logo"/>
                            <div className="col_right">
                                <p>posted on: Oct 14 2021 at 17:30</p>
                                <a href="#!" className="question user_link">u/SO_allan</a>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="row q1">
                    <div className="col_left">
                        <br/>
                        <div class="votes">
                            <div>
                                <p class="thumb">&#128077;</p>
                                <p class="upvote">1</p>
                            </div>
                            <div>
                                <p class="thumb">&#128078;</p>
                                <p class="downvote">-1</p>
                            </div>
                        </div>
                        <br/>
                        <p className="answer-button">6<br/>answers</p>
                        <br/>
                        <p>2.1k views</p>
                    </div>
                    <div className="col_right">
                        
                        <a href="#!" className="question">How do I link a JavaScript file to a HTML file?</a>
                        
                        <p className="description">How do you properly link a JavaScript file to a HTML document?
                            <br/>Secondly, how do you use jQuery within a JavaScript file?</p>

                        <div className="row user">
                            <img src={Logo2} className="col_left user_pf" alt="logo"/>
                            <div className="col_right">
                                <p>posted on: Sept 20 2021 at 8:23</p>
                                <a href="#!" className="question user_link">u/SO_shawn</a>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="row q1">
                    <div className="col_left">
                        <br/>
                        <div class="votes">
                            <div>
                                <p class="thumb">&#128077;</p>
                                <p class="upvote">1</p>
                            </div>
                            <div>
                                <p class="thumb">&#128078;</p>
                                <p class="downvote">-1</p>
                            </div>
                        </div>
                        <br/>
                        <p className="answer-button">41<br/>answers</p>
                        <br/>
                        <p>3.2k views</p>
                    </div>
                    <div className="col_right">
                        
                        <a href="#!" className="question">Display and hide a div with CSS tips</a>
                        
                        <p className="description">In my script there are three divs. I want to display div with className="ab" when I hover on first line and display div with className="abc", when hover on second line. Otherwise I want to display div with className="a" by default.

                            But it never displays the div with className="a".</p>

                        <div className="row user">
                            <img src={Logo2} className="col_left user_pf" alt="logo"/>
                            <div className="col_right">
                                <p>posted on: Nov 6 2021 at 21:57</p>
                                <a href="#!" className="question user_link">u/SO_rudy</a>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="row q1">
                    <div className="col_left">
                        <br/>
                        <div class="votes">
                            <div>
                                <p class="thumb">&#128077;</p>
                                <p class="upvote">1</p>
                            </div>
                            <div>
                                <p class="thumb">&#128078;</p>
                                <p class="downvote">-1</p>
                            </div>
                        </div>
                        <br/>
                        <p className="answer-button">9<br/>answers</p>
                        <br/>
                        <p>2.0k views</p>
                    </div>
                    <div className="col_right">
                        
                        <a href="#!" className="question">How does CSS grid layout works?</a>
                        
                        <p className="description">I was wondering how does the Css grid layouts. I thought I was getting close to understand it until I tried this below.

                            I thought it would make the item 5 go behind the 3 since it has no position defined in the grid, but instead it went after the item 3, what is the behaviour behind it?</p>

                        <div className="row user">
                            <img src={Logo2} className="col_left user_pf" alt="logo"/>
                            <div className="col_right">
                                <p>posted on: Sept 15 2021 at 14:10</p>
                                <a href="!#" className="question user_link">u/SO_kenny</a>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="row q1">
                    <div className="col_left">
                        <br/>
                        <div class="votes">
                            <div>
                                <p class="thumb">&#128077;</p>
                                <p class="upvote">1</p>
                            </div>
                            <div>
                                <p class="thumb">&#128078;</p>
                                <p class="downvote">-1</p>
                            </div>
                        </div>
                        <br/>
                        <p className="answer-button">3<br/>answers</p>
                        <br/>
                        <p>1.6k views</p>
                    </div>
                    <div className="col_right">
                        
                        <a href="#!" className="question">Linking MongoDB and SQL Server using MongoDB connector for BI</a>
                        
                        <p className="description">I want to add MongoDB server to SQL Server as a linked server. That's why I need ODBC being set up and fed by the MongoDB connector for BI. When I install and set it up its just not visible in the ODBC admin. Do you know what might be wrong?

                            I have tried with:
                            
                            1. Mongodb connector for bi 1.2 - Once installed its visible in the ODBC admin but i cant make set it up as to connect to the MongoDB instance
                            2. Mongodb connector for bi 2.11 - Installed and set up properly its just not visible in the ODBC system DSN tab
                            3. Progress Data Direct Driver - perfectly working its just not free of charge</p>

                        <div className="row user">
                            <img src={Logo2} className="col_left user_pf"  alt="logo"/>
                            <div className="col_right">
                                <p>posted on: Oct 30 2021 at 6:12</p>
                                <a href="#!" className="question user_link">u/SO_lyuba</a>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="row q1">
                    <div className="col_left">
                        <br/>
                        <div class="votes">
                            <div>
                                <p class="thumb">&#128077;</p>
                                <p class="upvote">1</p>
                            </div>
                            <div>
                                <p class="thumb">&#128078;</p>
                                <p class="downvote">-1</p>
                            </div>
                        </div>
                        <br/>
                        <p className="answer-button">15<br/>answers</p>
                        <br/>
                        <p>2.3k views</p>
                    </div>
                    <div className="col_right">
                        
                        <a href="#!" className="question">How to get GET (query string) variables in Express.js on Node.js?</a>
                        
                        <p className="description">Can we get the variables in the query string in Node.js just like we get them in $_GET in PHP?

                            I know that in Node.js we can get the URL in the request. Is there a method to get the query string parameters?</p>

                        <div className="row user">
                            <img src={Logo2} className="col_left user_pf" alt="logo"/>
                            <div className="col_right">
                                <p>posted on: Dec 13 2021 at 12:01</p>
                                <a href="#!" className="question user_link">u/SO_argiro</a>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="row q1">
                    <div className="col_left">
                        <br/>
                        <div class="votes">
                            <div>
                                <p class="thumb">&#128077;</p>
                                <p class="upvote">1</p>
                            </div>
                            <div>
                                <p class="thumb">&#128078;</p>
                                <p class="downvote">-1</p>
                            </div>
                        </div>
                        <br/>
                        <p className="answer-button">22<br/>answers</p>
                        <br/>
                        <p>5.2k views</p>
                    </div>
                    <div className="col_right">
                        
                        <a href="#!" className="question">How do I get started with Node.js?</a>
                        
                        <p className="description">Are there any good resources to get started with Node.JS? Any good tutorials, blogs or books?

                            Of course, I have visited its official website http://nodejs.org/, but I didn't think the documentation they have is a good starting point.</p>

                        <div className="row user">
                            <img src={Logo2} className="col_left user_pf" alt="logo"/>
                            <div className="col_right">
                                <p>posted on: Nov 19 2021 at 9:05</p>
                                <a href="#!" className="question user_link">u/SO_nicholas</a>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="row q1">
                    <div className="col_left">
                        <br/>
                        <div class="votes">
                            <div>
                                <p class="thumb">&#128077;</p>
                                <p class="upvote">1</p>
                            </div>
                            <div>
                                <p class="thumb">&#128078;</p>
                                <p class="downvote">-1</p>
                            </div>
                        </div>
                        <br/>
                        <p className="answer-button">18<br/>answers</p>
                        <br/>
                        <p>4.2k views</p>
                    </div>
                    <div className="col_right">
                        
                        <a href="#!" className="question">Error: request entity too large</a>
                        
                        <p className="description">I am using meanstack. I have the following use statements in my express.js

                            //Set Request Size Limit
                            app.use(express.limit(100000000));
                            Within fiddler I can see the content-length header with a value of: 1078702
                            
                            I believe this is in octets, this is 1.0787 megabytes.
                            
                            I have no idea why express is not letting me post the json array I was posting previously in another express project that was not using the mean stack project structure.</p>

                        <div className="row user">
                            <img src={Logo2} className="col_left user_pf" alt="logo"/>
                            <div className="col_right">
                                <p>posted on: Oct 3 2021 at 18:40</p>
                                <a href="#!" className="question user_link">u/SO_matthieu</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    )
}

export default Feed;
