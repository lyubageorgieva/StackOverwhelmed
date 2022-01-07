const mongoose = require('mongoose');


const FeedSchema = new mongoose.Schema({




    user: {
        type: mongoose.Schema.Types.ObjectID,          //connects post to user
        ref: 'user'
    },

    title: {
        type: String,
        ref:'user',
        
        
    },
    text: {
        type: String,
        required: true

    },

    name: {             //name of the user so we can keep post if the account is deleted
        type: String
    },
    avatar: {
        type: String
    },
    

    upvote: [
        {
            user: {
                type: mongoose.Schema.Types.ObjectID,            // user can only vote up or down on a post once. Number cannot increase
                ref: 'user'
            }
        }
    ],
    downvote: [
        {
            user: {
                type: mongoose.Schema.Types.ObjectID,            // user can only vote up or down on a post once. Number cannot increase
                ref: 'user'
            }
        }
    ], totalvotes: [
        {

            type: Number,            // user can only vote up or down on a post once. Number cannot increase
            required: true

        },
    ],





    answer: [
        {
            user: {
                type: mongoose.Schema.Types.ObjectID,
                ref: 'user'
            },
            text: {
                type: String,
                required: true

            },
            name: {             //name of the user so we can keep post if the account is deleted
                type: String
            },
            avatar: {
                type: String
            },
            date: {
                type: Date,
                default: Date.now
            },
            totalvotesANSW: [
                {

                    type: Number,            // user can only vote up or down on a post once. Number cannot increase
                    required: true

                },
            ],
            commentANSW: [
                {

                    user: {
                        type: mongoose.Schema.Types.ObjectID,
                        ref: 'user'
                    },
                    text: {
                        type: String,
                        required: true

                    },
                    name: {             //name of the user so we can keep post if the account is deleted
                        type: String
                    },
                    avatar: {
                        type: String
                    },
                    date: {
                        type: Date,
                        default: Date.now
                    },
                    comANSWvote: [
                        {
                            user: {
                                type: mongoose.Schema.Types.ObjectID,            // user can only vote up or down on a post once. Number cannot increase
                                ref: 'user'
                            }
                        }
                    ],
                    totalvotescomANSW: [
                        {

                            type: Number,            // user can only vote up or down on a post once. Number cannot increase
                            required: true

                        },
                    ],
                }

            ],





            upvoteANS: [
                {
                    user: {
                        type: mongoose.Schema.Types.ObjectID,            // user can only vote up or down on a post once. Number cannot increase
                        ref: 'user'
                    }
                }
            ],
            downvoteANS: [
                {
                    user: {
                        type: mongoose.Schema.Types.ObjectID,            // user can only vote up or down on a post once. Number cannot increase
                        ref: 'user'
                    }
                }
            ],
            totalvotesANS: [
                {
                    type: Number,            // user can only vote up or down on a post once. Number cannot increase
                    required: true
                }
            ],



            supervote: [

                {
                    user: {
                        type: mongoose.Schema.Types.ObjectID,
                        ref: 'user'
                    }

                }



            ],




        }
    ],
    comment: [
        {
            user: {
                type: mongoose.Schema.Types.ObjectID,
                ref: 'user'
            },
            text: {
                type: String,
                required: true

            },
            name: {             //name of the user so we can keep post if the account is deleted
                type: String
            },
            avatar: {
                type: String
            },
            date: {
                type: Date,
                default: Date.now
            },
            Comvote: [
                {
                    user: {
                        type: mongoose.Schema.Types.ObjectID,            // user can only vote up or down on a post once. Number cannot increase
                        ref: 'user'
                    }
                }
            ],
            totalvotesCOM: [
                {
                    type: Number,            // user can only vote up or down on a post once. Number cannot increase
                    required: true
                }

            ],
        }
    ],

    date: {
        type: Date,
        default: Date.now
    }


});

module.exports = Feed = mongoose.model('feed', FeedSchema);