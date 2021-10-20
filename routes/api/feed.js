const express = require('express');
const router = express.Router();
const {check, validationResult} = require('express-validator/check');
const request = require('superagent');
const auth = require('../../middleware/auth');


const Feed = require('../../modules/Feed');
const User = require('../../modules/User');

// @route       GET api/feed
// @description Test route
// @access      Private             //this section is for posts to be added to the feed by a user
router.feed('/',[auth,[
    check('text','Test Required').not().isEmpty()
]],
async  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }


    try{
const user = await User.findById(req.user.id).select('-password');

    const newFeedPOST = {
        text: req.body.text,
        name: user.name,
        avatar: user.avatar,
        user: request.user.id
    }

    const feedP = await newFeedPOST.save();

    res.json(feedP);

    }
    catch (err){
        console.error(err.message);
        res.status(500).send('Server Error');
    }
    

});

// export route
module.exports = router;