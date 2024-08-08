import dotenv from "dotenv"
import { validateEnv } from "../utils/validateEnv";

dotenv.config()

interface Config {
    MONGO_USER: string;
    MONGO_PASSWORD:string;
    MONGO_DB:string;
    PORT: number;
  }
  
  const config: Config = {
    MONGO_USER: process.env.MONGO_USER || '',
    MONGO_PASSWORD:process.env.MONGO_PASSWORD || '',
    MONGO_DB:process.env.MONGO_DB || '',
    PORT: Number(process.env.PORT) || 3000,
  };
  
  validateEnv([
    { key: 'MONGO_USER', value: config.MONGO_USER },
    { key: 'MONGO_PASSWORD', value: config.MONGO_PASSWORD },
    { key: 'MONGO_DB', value: config.MONGO_DB },
    { key: 'PORT', value: config.PORT },
  ]);
  
  export default config;
