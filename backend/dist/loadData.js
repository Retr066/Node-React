"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const database_1 = __importDefault(require("./config/database"));
const articleModel_1 = __importDefault(require("./models/articleModel"));
const mongoose_1 = __importDefault(require("mongoose"));
const loadData = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, database_1.default)();
        const filePath = path_1.default.join(__dirname, '..', '..', 'data.json');
        const data = JSON.parse(fs_1.default.readFileSync(filePath, 'utf8'));
        yield articleModel_1.default.deleteMany({});
        console.log('Exiting data deleted');
        yield articleModel_1.default.insertMany(data);
        console.log('Load data successfully');
        mongoose_1.default.connection.close();
    }
    catch (err) {
        console.error('Error loading data', err);
        mongoose_1.default.connection.close();
    }
});
loadData();
