"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const validateEnv_1 = require("../utils/validateEnv");
dotenv_1.default.config();
const config = {
    MONGO_USER: process.env.MONGO_USER || '',
    MONGO_PASSWORD: process.env.MONGO_PASSWORD || '',
    MONGO_DB: process.env.MONGO_DB || '',
    PORT: Number(process.env.PORT) || 3000,
};
(0, validateEnv_1.validateEnv)([
    { key: 'MONGO_USER', value: config.MONGO_USER },
    { key: 'MONGO_PASSWORD', value: config.MONGO_PASSWORD },
    { key: 'MONGO_DB', value: config.MONGO_DB },
    { key: 'PORT', value: config.PORT },
]);
exports.default = config;
