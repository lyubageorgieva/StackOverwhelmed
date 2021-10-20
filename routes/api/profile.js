const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const { check, validationResult} = require('express-validator');
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

// This section is not finished
//@route       POST api/profile
//@description Creating or Updating user profile
//@access      Private
router.post(
    '/',
    [auth,[
        check('Bio', 'Bio is required').not().isEmpty(),
        check('githubname', 'Githubname is required').not().isEmpty(),
        check('University', 'University is required').not().isEmpty(),
        check('Field', 'Field is required').not().isEmpty(),
        check('Year', 'Year is required').not().isEmpty(),

    ]
],
async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty())
    return res.status(400).json({errors: errors.array()});
    const {
        bio,
        githubname,
        University,
        Field,
        Year
    } = req.body;
    // build profile object
    const profileFields ={};
    profileFields.user = req.user.id;
    if(bio) profileFields.Bio = req.user.id;
    if(githubname) profileFields.githubname = githubname;
    if(University) profileFields.University = University;
    if(Field) profileFields.Field = Field;
    if(Year) profileFields.Year = year;
}
)

//@route       Get api/profile
//@description Get all profiles
//@access      Public
router.get('/', async (req, res) => {
    try {
        const profiles = await Profile.find().populate('user', ['name', 'avatar']);
        res.json(profiles);
    } catch (error) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
})

//@route       Get api/profile
//@description Get profile from user ID
//@access      Public
router.get('/user/:user_id', async (req, res) => {
    try {
        const profiles = await Profile.findOne({ user: req.params.user_id}).populate('user', 
        ['name', 'avatar']);
        
        if(!profile) 
        return res.status(400).json({msg: 'There is no profile for this user'});
        res.json(profiles);
    } catch (err) {
        console.error(err.message);
        if(err.kind == 'ObjectId'){
            return res.status(400).json({msg: 'There is no profile for this user'})
        }
        res.status(500).send('Server Err');
    }
});
//@route       DELETE api/profile
//@description Delete a profile, user & posts
//@access      Private
router.get('/',auth, async (req, res) => {
    try {
        // Remove Profile
        await Profile.findOneAndRemove({user : req.user.id});
        // Remove User
        await User.findOneAndRemove({user : req.user.id});
        res.json({msg: 'User deleted'});
    } catch (error) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
})

// Export route
module.exports = router;
    