import React from 'react';
import {Link} from 'react-router-dom';

const AccountActions = () => {
    return (
        <div class="edit-profile-btn">
            <Link to="/edit-profile" id="registration-button" class="signup-btn" type="submit">Edit Profile &#8594;</Link> 
        </div>
    )
}

export default AccountActions