import dotenv from  'dotenv'
import connectDB from './config/database'
import app from './app'
import config from './config/config';

dotenv.config();

connectDB();

app.listen(config.PORT,()=>{
    console.log(`Server is running on port: ${config.PORT}`)
})
