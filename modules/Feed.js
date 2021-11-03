const mongoose = require ('mongoose');


const FeedSchema = new mongoose.Schema({



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
    vote: [
        {
            user: {
                type: mongoose.Schema.Types.ObjectID,            // user can only vote up or down on a post once. Number cannot increase
                ref: 'user'
            }
        }
    ],
    supervote:[

        {
            user: {
                type: mongoose.Schema.Types.ObjectID,
                ref: 'user'
            }

        }



    ],
    
    comments: [
        {
            user: {
                type: mongoose.Schema.Types.ObjectID,         
                ref: 'user'
            } ,
            text: {
                type: String,
                required: true

            },
            avatar: {
                type: String
            },
            date: {
                type: Date,
                default: Date.now
            },
        }
    ],
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Feed = mongoose.model('feed',FeedSchema );