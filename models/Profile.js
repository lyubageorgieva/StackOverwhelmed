const mongoose = require('mongoose');

// Reference to User Model
const PrfileScheme = new mongoose.Scheme({
   user: {
       type: mongoose.Scheme.Types.ObjectId
       //ref: 'user'// Will be activated once User.js is created 
   },
   bio: { 
       type: String
   },
   githubusername: {
       type: String
   },
   social:{
       youtube:{
           type: String
       },
       twitter: {
           type: String
       },
       facebook: {
           type: String
       },
       linkedin: {
           type: String
       },
       instagram: {
           type: String
       }
   }
});

module.exports = Profile = mongoose.model('profile', ProfileSchema);