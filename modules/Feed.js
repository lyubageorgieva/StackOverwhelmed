const mongoose = require ('mongoose');

const Schema = mongoose.Schemal

const FeedSchema = new Schema({



    user: {
        type: Schema.Types.ObjectID,            //connects post to user
        ref: 'users'
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
    votes: [
        {
            user: {
                type: Schema.Types.ObjectID,            // user can only vote up or down on a post once. Number cannot increase
                ref: 'users'
            }
        }
    ],
    comments: [
        {
            user: {
                type: Schema.Types.ObjectID,         
                ref: 'users'
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