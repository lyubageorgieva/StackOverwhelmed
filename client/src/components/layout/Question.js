import React from 'react'

export const Question = () => {
    return (
        <div id="Feed">
            <h1 className="row">Ask A Question</h1>
            <div className="row q1">
                <form action="/action_page.php">
                    <label for="title">Title</label>
                    <input type="text" className="title col_right" name="title" maxlength="280" placeholder="What's your question?"/><br/><br/>
                    <textarea id="details" name="details" rows="10" cols="100"></textarea><br/><br/>
                    <div className="row tags-box">
                        <ul id="myUL">
                            <input type="text" id="myInput" placeholder="Add a tag..." maxlength="16" />
                        </ul>
                    </div>
                    
                    <div id="myDIV" className="row">
                        <span onclick="newElement()" className="addBtn">Add</span>
                    </div>

                    
                    <label for="img">Select image:</label>
                    <input type="file" id="img" name="img" accept="audio/*,video/*,image/"/>
                    <br/><br/>
                    <input type="submit" value="Submit question"/>
                </form>
            </div>
        </div>

    )
}

export default Question;
