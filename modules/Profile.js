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
        type: String,
        required: true
    },
     school: {
         University:{
             type: String,
             required: true
         },
         Field:{
             type: String,
             required: true
         },
         year:{
             type: Integer,
             required: true
         },

     },
});

//Exporting Mod
module.exports = Profile = mongoose.model('profile',ProfileSchema);