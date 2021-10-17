const express = require('express');
const router = express.Router();

// @route       GET api/auth
// @description Test route
// @access      Public
router.get('/', (req, res) => res.send('Auth route'));

// export route
module.exports = router;