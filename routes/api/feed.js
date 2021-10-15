const express = require('express');
const router = express.Router();

// @route       GET api/feed
// @description Test route
// @access      Public
router.get('/', (req, res) => res.send('Feed route'));

// export route
module.exports = router;