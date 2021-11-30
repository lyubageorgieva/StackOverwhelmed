const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');// no need for express-validator/check anymore
const User = require('../../modules/User');

// @route       Post api/users
// @description Test route
// @access      Public
router.post('/', [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Please enter a valid passwordof 8 or more caracters').isLength({ min: 8 })],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) //returns an error is any of the three above fields (name, email, password) are empty or wrongly formated according to the rules defined in the User.js file in modules.
        {
            return res.status(400).json({ errors: errors.array() });
        }
        //check to see if the user already exists.
        const { name, email, password } = req.body;
        try {
            let user = await User.findOne({ email });
            if (user) {
                return res.status(400).json({ errors: [{ msg: 'User already exits' }] });
            }
            const avatar = gravatar.url(email, { s: '200', d: 'mm' })
            user = new User({ name, email, avatar, password });

            const salt = await bcryptjs.genSalt(10);

            user.password = await bcryptjs.hash(password, salt); //encrypt user password

            await user.save(); //save user profile

            const payload = {
                user: {
                    id: user.id
                }
            }

            jwt.sign(payload, config.get('jwtSecret'), (err, token) => {
                if (err) throw err;
                res.json({ token });
            });


            const loadPosts = (user) => {
                listByUser({
                    userId: user
                }, {
                    t: jwt.token
                }).then((data) => {
                    if (data.error) {
                        console.log(data.error)
                    } else {
                        setPosts(data)
                    }
                })
            }

        }
        catch (err) {
            console.error(err.message);
            res.status(500).send('Server Error');
        }
    });













// export route
module.exports = router;