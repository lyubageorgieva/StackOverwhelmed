const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const User = require('../../modules/User');
const jwt = require('jsonwebtoken');
const config = require('config');
const {check, validationResult} = require('express-validator');
const bcryptjs = require('bcryptjs');

// @route       GET api/auth
// @description Test route
// @access      Public
router.get('/', auth, async(req, res) => {
    try{
        const user = await User.findById(req.user.id).select('-password');
        res.json(user);
    }
    catch(err){
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

router.post('/', [
    check('email', 'Please include a valid email').isEmail(), 
    check('password', 'Password required').exists()],
    async(req,res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) 
    {
        return res.status(400).json({errors: errors.array()});
    }

    const {email, password } = req.body;
    try{
        let user = await User.findOne({email});
        if(!user){
            return res.status(400).json({errors: [{msg: 'User does not exist exits'}]});
        }

        const isMatch = await bcryptjs.compare(password, user.password);

        if(!isMatch)
        {
            return res.status(400).json({errors: [{msg: 'Invalid password'}]});
        }

        const payload = {
            user: {
                id: user.id
            }
        };

        jwt.sign(payload, config.get('jwtSecret'), {expiresIn: 3600},
        (err, token) => {
            if(err) throw err;
            res.json({token});
        });
    }    
    catch(err)
    {
        console.error(err.message);
        res.status(500).send('Server Error');
    }

});

// export route
module.exports = router; 