import mongoose from 'mongoose'
import config from './config';


const MONGO_URI = `mongodb+srv://${config.MONGO_USER}:${config.MONGO_PASSWORD}@cluster0.xolvq.mongodb.net/${config.MONGO_DB}`

const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URI)
        console.log('MongoDB connected')
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}

export default connectDB
