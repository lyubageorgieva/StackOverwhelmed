import React from 'react'

export const Question = () => {
    return (
        <div id="Feed">
            <h1 className="row">Ask A Question</h1>
            <div className="row q1">
                <form action="/action_page.php">
                    <label for="title">Title</label>
                    <input type="text" className="title col_right" name="title" maxlength="280" placeholder="What's your question?"/>
                    <br/><br/>
                    <textarea id="details" name="details" rows="10" cols="100"></textarea>
                    <br/><br/>
                    <input type="submit" value="Submit question"/>
                </form>
            </div>
        </div>

    )
}

export default Question;
