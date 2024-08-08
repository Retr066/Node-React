import fs from 'fs'
import path from 'path'
import connectDB from './config/database';
import articleModel from './models/articleModel';
import mongoose from 'mongoose';


const loadData = async () => {
    try {

        await connectDB();

        const filePath = path.join(__dirname, '..', '..', 'data.json');
        const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

        await articleModel.deleteMany({});
        console.log('Exiting data deleted');

        await articleModel.insertMany(data);
        console.log('Load data successfully');

        mongoose.connection.close();
    } catch (err) {
        console.error('Error loading data', err);
        mongoose.connection.close();
    }
};

loadData();
