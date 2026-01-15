const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const MONGO_URI = process.env.MONGO_URI;

const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URI)
        console.log('MongoDB connected successfully');
    } catch (err) {
        console.log('MongoDB connection failed:', err.message);
        process.exit(1);
    }

}

module.exports = { connectDB }