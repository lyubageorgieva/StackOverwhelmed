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

University:{
         type: String,
         required: true
        },
Field:{
         type: String,
         required: true
     },

  

Posts:[{

    user: {
        type: mongoose.Schema.Types.ObjectID,          //connects post to user
        ref: 'user'
    },

    text: {
        type: String,
        required: true
    },

    name: {             //name of the user so we can keep post if the account is deleted
        type: String
    },
    avatar:{
        type: String
    },
   
}],
});

module.exports = Profile = mongoose.model('profile',ProfileSchema);