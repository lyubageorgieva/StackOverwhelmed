const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const {check, validationResult} = require('express validator - valida');

const Profile = require('../../modules/Profile');
const User = require('../../modules/User');

// @route       GET api/profile/me
// @description Get current users profile
// @access      Private
router.get('/me', (req, res) => {
    try{
    const profile = await Profile.findOne({user: req.user.id}).populate('user',
    ['name', 'avatar']);

    if(!profile){
        return res.status(400).json({msg: 'Profile not existent for this user'});
    }
    res.json(profile);
    }
    catch(err){
    console.error(err.message);
    res.status(500).send('Server Err');
    }

});
// @route       POST api/profile
// @description New or Udpate user profile 
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
     const{
     bio,
     githubname,
     youtube,
     twitter,
     facebook,
     linkedin,
     instagram,
    } = req.body;

     //Profile Object creation
     const profileFields ={};
     profileFields.user = req.user.id;
     if(bio) profileFields.bio = bio;
     if(githubname) profileFields.githubname = githubname;

     //Social Object creation
     profileFields.social = {}
     if(youtube) profileFields.social.youtube = youtube;
     if(twitter) profileFields.social.twitter = twitter;
     if(facebook) profileFields.social.facebook = facebook;
     if(linkedin) profileFields.social.linkedin = linkedin;
     if(instagram) profileFields.social.instagram = instagram;

     try{
        let profile = await Profile.findOne({user : req.user.id});

        if(profile){
            //Update Profile
            profile = await Profile.findOneAndUpdate(
                {user: req.user.id }, 
                {$set: profileFields },
                {new: true })
            return res.json(profile);
        };

        // Create Profile
        profile = new Profile(profileFields);
        await Profile.save();
        res.json(profile);
     } catch(error){
         console.error(error.message);
         res.status(500).send('Server Err');
     } 

  }
);
// export route
module.exports = router;
    