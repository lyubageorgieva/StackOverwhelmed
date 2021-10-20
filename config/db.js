const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

// Connect to MongoDB
mongoose.connect(db);

const connectDB = async () => {
    try {
    await mongoose.connect(db);
    // useFindAndModify: fasle

    console.log('MongoDB Connected...');
    } catch(error) {
        console.error(error.message);

        // Terminate process with failure
        process.exit(1);
    }
}

module.exports = connectDB;