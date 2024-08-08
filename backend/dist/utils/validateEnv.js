"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateEnv = void 0;
const validateEnv = (vars) => {
    vars.forEach(variable => {
        if (!variable.value) {
            throw new Error(`${variable.key} must be defined in .env file`);
        }
    });
};
exports.validateEnv = validateEnv;
