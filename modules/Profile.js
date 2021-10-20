const { profile_url } = require('gravatar');
const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
});

//Exporting Mod
module.exports = Profile = mongoose.model('profile',ProfileSchema);