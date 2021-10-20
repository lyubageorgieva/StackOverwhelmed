const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({ //user schema to define what the user has to enter for registration + is it required and what condition (for password).
    name:{
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    avatar:{
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = User = mongoose.model('user', UserSchema);