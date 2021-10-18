const { profile_url } = require('gravatar');
const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    bio: {
        type: String,
        required: true
    },
    githubname: {
        type: String
    },
     social: {
         youtube:{
             type: String
         },
         twitter:{
             type: String
         },
         facebook:{
             type: String
         },
         linkedin:{
             type: String
         },
         instagram: {
             type: String
         }
     },
});

// Exporting Module
module.exports = Profile = mongoose.model('profile',ProfileSchema);