const express = require('express');
const router = express.Router();
const {check, validationResult} = require('express-validator');// no need for express-validator/check anymore

// @route       Post api/users
// @description Test route
// @access      Public
router.post('/', [
    check('name', 'Name is required').not().isEmpty(), 
     check('email', 'Please include a valid email').isEmail(), 
     check('password', 'Please enter a valid passwordof 6 or more caracters').isLength({min: 6})],
     (req,res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) //returns an error is any of the three above fields (name, email, password) are empty or wrongly formated according to the rules defined in the User.js file in modules.
    {
        return res.status(400).json({errors: errors.array()});
    }
    res.send('User route');
});

// export route
module.exports = router;
