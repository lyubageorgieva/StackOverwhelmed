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
    
        University: {
            type: String,
            required: true
        },
        Field: {
            type: String,
            required: true
        },
    
    
    
        Posts: [
            {
                    type: mongoose.Schema.Types.ObjectId,
                    ref:'Feed',
                    
                    
                }
    
        ],
        Titles:[
            {
                type: mongoose.Schema.Types.ObjectId,
                ref:'Feed',
                
                
            }
        ]
    
});

module.exports = Profile = mongoose.model('profile', ProfileSchema);