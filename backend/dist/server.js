"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const database_1 = __importDefault(require("./config/database"));
const app_1 = __importDefault(require("./app"));
const config_1 = __importDefault(require("./config/config"));
dotenv_1.default.config();
(0, database_1.default)();
app_1.default.listen(config_1.default.PORT, () => {
    console.log(`Server is running on port: ${config_1.default.PORT}`);
});
