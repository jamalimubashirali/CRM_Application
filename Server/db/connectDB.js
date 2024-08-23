import mongoose from 'mongoose';

// Establishing Database Connection
export const connectDB = (url) => {
    return mongoose.connect(url);
}