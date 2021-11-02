const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const {check, validationResult} = require('express-validator'); // no need for express-validator/check anymore

const Profile = require('../../modules/Profile');
const User = require('../../modules/User');
//@route GET api/profile/me
//@description Get current users profile
//@access Private
router.get('/me', auth, async(req, res) => {
try {
    const profile = await Profile.findOne({user: req.user.id}).populate('user', ['name', 'avatar']);
    if(!profile){
        return res.status(400).json({ msg: 'There is no profile for this user'});
    }

    res.json(profile);
} catch (err) {
    console.error(err.message);
    res.status(500).send('Server Err');
}
});

// Route to Profile to Create/Update 
//@route POST api/profile
//@desc Create or update user profile
//@access Private
router.post('/',[auth, [
    check('bio', 'Bio is required')
    .not()
    .isEmpty(),
    check('University', 'University is required')
    .not()
    .isEmpty(),
    check('Field', 'Field is required')
    .not()
    .isEmpty()
  ]
], async(req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() });
    }
    const{
        bio,
        githubname,
        University,
        Field
    } = req.body;
    // Build profile object
    const profileFields = {};
    profileFields.user = req.user.id;
    if(bio) profileFields.bio = bio;
    if(githubname) profileFields.githubname = githubname;
    if(University) profileFields.University = University;
    if(Field) profileFields.Field = Field;
    
    try{
        let profile = await Profile.findOne({ user: req.user.id});

        if(profile){
           //Updates profile with specific token
           profile = await Profile.findOneAndUpdate(
            { user: req.user.id}, 
            { $set: profileFields},
            { new: true}
            );

            return res.json(profile);
        }
        // Create
        profile = new Profile(profileFields);

        await profile.save();
        res.json(profile);
    }catch(err){
        console.error(err.message);
        res.status(500).send('Server Err');
    }

});

//@route GET api/profile
//@desc Get all profiles
//@access Public
router.get('/', async (req, res) => {
    try {
        const profiles = await Profile.find().populate('user', ['name', 'avatar']);
        res.json(profiles);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Err');
        }
});

//@route GET api/profile/user/:user_id
//@desc Get profile by user ID
//@access Public
router.get('/user/:user_id', async (req, res) => {
    try {
        const profile = await Profile.findOne({ user: req.params.user_id }).populate('user', ['name', 'avatar']);
        
        if(!profile) return res.status(400).json({ msg: 'Profile not found'});

        res.json(profile);
    } catch (err) {
        console.errror(err.message);
        if(err.kind == 'ObjectId'){
            return res.status(400).json({ msg: 'Profile not found'});
        }
        res.status(500).send('Server Err');
        }
});
//@route DELETE api/profile
//@description Delete profile, user & posts
//@access Private
router.get('/', auth, async (req, res) => {
    try {
        //Remove Profile
        await Profile.findOneAndRemove({user: req.user.id});
        //Remove User
        await User.findOneAndRemove({_id: req.user.id});
        res.json({ msg: 'User Deleted'});
    } catch (err) {
        console.errror(err.message);
        res.status(500).send('Server Err');
        }
});
module.exports = router;

