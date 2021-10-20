const express = require('express');
const router = express.Router();

const auth = require('../../middleware/auth');
const Profile = require('../../modules/Profile');
const User = require('../../modules/User');

//@route       GET api/profile/me
//@description Get current users profile
//@access      Private
router.get('/me',auth, async(req, res) => {
    try {
    const profile = await Profile.findOne({user: req.user.id}).populate('user',
    ['name', 'avatar']
    );

    if(!profile){
        return res.status(400).json({msg: 'Profile not existent for this user'});
    }
    res.json(profile);
    }
    catch(err) {
    console.error(err.message);
    res.status(500).send('Server Err');
    }

});

module.exports = router;
    