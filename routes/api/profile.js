const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const {check, validationResult} = require('express validator - valida');

const Profile = require('../../models/Profile');
const User = require('../../models/User');

// @route       GET api/profile/me
// @description Get current users profile
// @access      Private
router.get('/me', (req, res) => {
    try{
    const profile = await Profile.findOne({user: req.user.id}).populate('user',
    ['name', 'avatar']);

    if(!profile){
        return res.status(400).json({msg: 'There is no profile for this user'});
    }
    }
    catch(err){
    console.error(err.message);
    res.status(500).send('Server Error');
    }

});
// @route       GET api/profile
// @description Create wew or Udpate user profile 
// @access      Private
router.post('/',[auth,
    [
    check('bio', 'Bio is required')
    .not()
    .isEmpty,
]
],
    async(req, res) => {
     const errors = validationResult(rep);
     if(!errors.isEmpty()){
         return res.status(400).json({erros: errors.array()})
     }
    }
    );

// export route
module.exports = router;